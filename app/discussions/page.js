"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/Components/common/Navbar/Navbar";
import Footer from "@/Components/common/Footer/Footer";
import { useSelector } from "react-redux";
import { fetchUrlTheMovieDb } from "@/utils/apiService";
import { useTranslation } from "@/hooks/useTranslation";

const categoryColors = {
  General: "#0A1A38",
  Movies: "#21d07a",
  "TV Shows": "#d2d531",
};

export default function DiscussionsPage() {
  const theme = useSelector((state) => state.theme.theme);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const { t } = useTranslation();

  const DISCUSSION_TOPICS = [
    {
      id: 1,
      title: t("discussions.topic1"),
      author: "MovieFan",
      replies: 42,
      time: "2 hours ago",
      category: "General",
      categoryLabel: t("discussions.general"),
    },
    {
      id: 2,
      title: t("discussions.topic2"),
      author: "SciFiLover",
      replies: 28,
      time: "5 hours ago",
      category: "Movies",
      categoryLabel: t("discussions.moviesCategory"),
    },
    {
      id: 3,
      title: t("discussions.topic3"),
      author: "BingeWatcher",
      replies: 35,
      time: "1 day ago",
      category: "TV Shows",
      categoryLabel: t("discussions.tvShowsCategory"),
    },
    {
      id: 4,
      title: t("discussions.topic4"),
      author: "MusicLover",
      replies: 19,
      time: "1 day ago",
      category: "Movies",
      categoryLabel: t("discussions.moviesCategory"),
    },
    {
      id: 5,
      title: t("discussions.topic5"),
      author: "CinemaGeek",
      replies: 53,
      time: "2 days ago",
      category: "Movies",
      categoryLabel: t("discussions.moviesCategory"),
    },
    {
      id: 6,
      title: t("discussions.topic6"),
      author: "TVCritic",
      replies: 67,
      time: "3 days ago",
      category: "TV Shows",
      categoryLabel: t("discussions.tvShowsCategory"),
    },
  ];

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const res = await fetchUrlTheMovieDb(
          "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
        );
        setTrendingMovies(res.data.results.slice(0, 5));
      } catch (e) {
        // silently handled
      }
    };
    fetchTrending();
  }, []);

  return (
    <>
      <Navbar />
      <main
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "40px 32px",
          minHeight: "60vh",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "linear-gradient(to right, #0A1A38, #0A1A38)",
            borderRadius: "12px",
            padding: "40px",
            marginBottom: "32px",
          }}
        >
          <h1
            style={{
              fontSize: "36px",
              fontWeight: 700,
              color: "white",
              margin: 0,
            }}
          >
            {t("discussions.title")}
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.85)",
              marginTop: "12px",
              marginBottom: 0,
            }}
          >
            {t("discussions.subtitle")}
          </p>
        </div>

        <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
          {/* Discussion list */}
          <div style={{ flex: "1 1 600px" }}>
            <h2
              className="dark:text-white"
              style={{ fontSize: "20px", fontWeight: 600, marginBottom: "16px" }}
            >
              {t("discussions.recentTopics")}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {DISCUSSION_TOPICS.map((topic) => (
                <div
                  key={topic.id}
                  className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-[#444] hover:shadow-md"
                  style={{
                    padding: "20px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    transition: "box-shadow 0.2s",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "8px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        padding: "3px 10px",
                        borderRadius: "12px",
                        color: "white",
                        backgroundColor: categoryColors[topic.category] || "#666",
                      }}
                    >
                      {topic.categoryLabel}
                    </span>
                    <span
                      className="dark:text-gray-400"
                      style={{ fontSize: "12px", color: "#999" }}
                    >
                      {topic.time}
                    </span>
                  </div>
                  <h3
                    className="dark:text-white"
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      margin: "0 0 8px 0",
                    }}
                  >
                    {topic.title}
                  </h3>
                  <div
                    className="dark:text-gray-400"
                    style={{
                      display: "flex",
                      gap: "16px",
                      fontSize: "13px",
                      color: "#666",
                    }}
                  >
                    <span>{t("discussions.by")} {topic.author}</span>
                    <span>{topic.replies} {t("discussions.replies")}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar - Trending */}
          <div style={{ flex: "0 0 280px" }}>
            <h2
              className="dark:text-white"
              style={{ fontSize: "20px", fontWeight: 600, marginBottom: "16px" }}
            >
              {t("discussions.trendingNow")}
            </h2>
            <div
              className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-[#444] divide-y divide-[#f0f0f0] dark:divide-gray-700"
              style={{
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              {trendingMovies.map((movie, index) => (
                <div
                  key={movie.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 16px",
                  }}
                >
                  <span
                    className="text-primary dark:text-brand"
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      minWidth: "20px",
                    }}
                  >
                    {index + 1}
                  </span>
                  {movie.poster_path && (
                    <Image
                      src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                      width={40}
                      height={60}
                      alt={movie.title || movie.name}
                      style={{ borderRadius: "4px", objectFit: "cover" }}
                    />
                  )}
                  <div>
                    <p
                      className="dark:text-white"
                      style={{
                        fontSize: "13px",
                        fontWeight: 600,
                        margin: 0,
                        lineHeight: 1.3,
                      }}
                    >
                      {movie.title || movie.name}
                    </p>
                    <p
                      className="dark:text-gray-400"
                      style={{ fontSize: "11px", color: "#999", margin: "2px 0 0" }}
                    >
                      {Math.round(movie.vote_average * 10)}% {t("discussions.rating")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
