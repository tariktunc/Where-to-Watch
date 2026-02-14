"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { fetchUrlTheMovieDb } from "@/utils/apiService";
import { useTranslation } from "@/hooks/useTranslation";

function RatingBadge({ rating }) {
  const percentage = Math.round(rating * 10);
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const getColor = (pct) => {
    if (pct >= 70) return "#21d07a";
    if (pct >= 40) return "#d2d531";
    return "#db2360";
  };

  return (
    <div
      style={{
        position: "absolute",
        bottom: "-14px",
        left: "8px",
        width: "34px",
        height: "34px",
        borderRadius: "50%",
        backgroundColor: "#0A1A38",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width="30" height="30" viewBox="0 0 40 40">
        <circle
          cx="20"
          cy="20"
          r={radius}
          fill="none"
          stroke="#071228"
          strokeWidth="3"
        />
        <circle
          cx="20"
          cy="20"
          r={radius}
          fill="none"
          stroke={getColor(percentage)}
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 20 20)"
        />
        <text
          x="20"
          y="22"
          textAnchor="middle"
          fill="white"
          fontSize="11"
          fontWeight="700"
        >
          {percentage}
          <tspan fontSize="5" dy="-4">
            %
          </tspan>
        </text>
      </svg>
    </div>
  );
}

export default function Home({ urlStatus, status }) {
  const [moviesData, setMoviesData] = useState([]);
  const router = useRouter();
  const { locale } = useTranslation();

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/trending/${status}/${urlStatus}?language=${locale}`;

    const fetchData = async () => {
      try {
        const trendingMovies = await fetchUrlTheMovieDb(url);
        setMoviesData(trendingMovies.data.results);
      } catch (error) {
        console.error("HorizontallyItem.js => fetchData => ", error);
      }
    };
    fetchData();
  }, [locale, urlStatus, status]);

  function TopList() {
    return moviesData.map((item, index) => {
      const title = item.title || item.name;
      const date = item.release_date || item.first_air_date;
      const formattedDate = date
        ? new Date(date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : "";

      return (
        <div
          key={index}
          onClick={() =>
            router.push(`${status === "tv" ? "tvshow" : status}/${item.id}`)
          }
          className="initial:w-28 md:w-44 cursor-pointer"
          style={{
            flexShrink: 0,
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.03)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <div style={{ position: "relative" }}>
            <Image
              className="rounded-lg w-full"
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              width={500}
              height={750}
              alt={title}
              style={{ borderRadius: "8px" }}
            />
            <RatingBadge rating={item.vote_average} />
          </div>
          <div style={{ paddingTop: "20px", paddingLeft: "4px", paddingRight: "4px" }}>
            <p
              className="dark:text-white"
              style={{
                fontSize: "14px",
                fontWeight: 700,
                lineHeight: "1.3",
                margin: 0,
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {title}
            </p>
            <p
              className="dark:text-gray-400"
              style={{
                fontSize: "13px",
                color: "#666",
                margin: "4px 0 0 0",
              }}
            >
              {formattedDate}
            </p>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="flex flex-wrap initial:gap-3 md:gap-5 justify-center items-center py-5">
      {<TopList />}
    </div>
  );
}
