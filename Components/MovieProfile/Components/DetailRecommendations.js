"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/hooks/useTranslation";

function RecoCard({ item, status }) {
  const router = useRouter();
  const title = item.title || item.name;
  const type = status === "tv" ? "tvshow" : "movie";
  const rating = item.vote_average ? Math.round(item.vote_average * 10) : 0;

  return (
    <div
      onClick={() => router.push(`/${type}/${item.id}`)}
      style={{
        flex: "0 0 250px",
        cursor: "pointer",
        borderRadius: "8px",
        overflow: "hidden",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div style={{ position: "relative", aspectRatio: "16/9" }}>
        {item.backdrop_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
            width={250}
            height={141}
            alt={title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(255,255,255,0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="2" />
              <path d="m10 8 6 4-6 4V8z" />
            </svg>
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px 4px",
        }}
      >
        <p
          className="text-primary dark:text-white"
          style={{
            fontSize: "13px",
            fontWeight: 600,
            margin: 0,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            flex: 1,
          }}
        >
          {title}
        </p>
        {rating > 0 && (
          <span
            className="text-gray-500 dark:text-white/50"
            style={{
              fontSize: "12px",
              marginLeft: "8px",
              flexShrink: 0,
            }}
          >
            {rating}%
          </span>
        )}
      </div>
    </div>
  );
}

export default function DetailRecommendations({ recommendations, status }) {
  const { t } = useTranslation();

  if (!recommendations?.results || recommendations.results.length === 0) return null;

  return (
    <section style={{ marginBottom: "32px" }}>
      <h3
        className="text-primary dark:text-white"
        style={{
          fontSize: "20px",
          fontWeight: 600,
          margin: "0 0 16px 0",
        }}
      >
        {t("detail.recommendations")}
      </h3>
      <div
        className="custom-scrollbar"
        style={{
          display: "flex",
          gap: "12px",
          overflowX: "auto",
          overflowY: "hidden",
          paddingBottom: "12px",
        }}
      >
        {recommendations.results.slice(0, 12).map((item) => (
          <RecoCard key={item.id} item={item} status={status} />
        ))}
      </div>
    </section>
  );
}
