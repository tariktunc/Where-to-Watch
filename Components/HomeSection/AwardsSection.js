"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { fetchUrlTheMovieDb } from "@/utils/apiService";
import { useTranslation } from "@/hooks/useTranslation";

function AwardCard({ item }) {
  const router = useRouter();
  const title = item.title || item.name;
  const type = item.media_type === "tv" ? "tvshow" : "movie";
  const date = item.release_date || item.first_air_date;
  const year = date ? date.substring(0, 4) : "";

  return (
    <div
      onClick={() => router.push(`/${type}/${item.id}`)}
      className="bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 hover:scale-[1.03] transition-all"
      style={{
        flex: "0 0 220px",
        cursor: "pointer",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative", aspectRatio: "2/3" }}>
        <Image
          src={
            item.poster_path
              ? `https://image.tmdb.org/t/p/w300${item.poster_path}`
              : "/placeholder-image.svg"
          }
          width={220}
          height={330}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        {item.vote_average > 0 && (
          <div
            style={{
              position: "absolute",
              top: "8px",
              right: "8px",
              backgroundColor: "rgba(10,26,56,0.9)",
              borderRadius: "6px",
              padding: "4px 8px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFD700">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span
              style={{
                color: "white",
                fontSize: "13px",
                fontWeight: 700,
              }}
            >
              {item.vote_average.toFixed(1)}
            </span>
          </div>
        )}
      </div>
      <div style={{ padding: "12px" }}>
        <p
          className="text-primary dark:text-white"
          style={{
            fontSize: "14px",
            fontWeight: 700,
            margin: 0,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </p>
        <p
          className="text-gray-500 dark:text-white/50"
          style={{
            fontSize: "12px",
            margin: "4px 0 0 0",
          }}
        >
          {year}
        </p>
      </div>
    </div>
  );
}

export default function AwardsSection() {
  const { t, locale } = useTranslation();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchAwards = async () => {
      try {
        const res = await fetchUrlTheMovieDb(
          `https://api.themoviedb.org/3/movie/top_rated?language=${locale}&page=1`
        );
        const results = (res.data.results || [])
          .filter((m) => m.vote_average >= 8.0)
          .slice(0, 10);
        setItems(results);
      } catch (error) {
        console.error("AwardsSection fetch error:", error);
      }
    };
    fetchAwards();
  }, [locale]);

  if (items.length === 0) return null;

  return (
    <section
      className="bg-gray-50 dark:bg-primary"
      style={{
        position: "relative",
        width: "100%",
        marginTop: "10px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "30px 32px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "20px",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#FFD700">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <h3
            className="text-primary dark:text-white"
            style={{
              fontSize: "24px",
              fontWeight: 600,
              margin: 0,
            }}
          >
            {t("home.awards")}
          </h3>
        </div>
        <div
          className="custom-scrollbar"
          style={{
            display: "flex",
            gap: "16px",
            overflowX: "auto",
            overflowY: "hidden",
            paddingBottom: "16px",
          }}
        >
          {items.map((item) => (
            <AwardCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
