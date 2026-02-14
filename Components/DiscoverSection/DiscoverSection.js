"use client";
import React, { useState, useEffect } from "react";
import { fetchUrlTheMovieDb } from "@/utils/apiService";
import { useTranslation } from "@/hooks/useTranslation";

export default function DiscoverSection() {
  const [backdropUrl, setBackdropUrl] = useState("");
  const { t, locale } = useTranslation();

  useEffect(() => {
    const fetchBackdrop = async () => {
      try {
        const res = await fetchUrlTheMovieDb(
          `https://api.themoviedb.org/3/trending/movie/day?language=${locale}`
        );
        const results = res.data.results;
        if (results.length > 0) {
          const random = results[Math.floor(Math.random() * Math.min(5, results.length))];
          setBackdropUrl(
            `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${random.backdrop_path}`
          );
        }
      } catch (e) {
        console.error("DiscoverSection backdrop fetch error:", e);
      }
    };
    fetchBackdrop();
  }, [locale]);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "300px",
        backgroundImage: backdropUrl
          ? `url(${backdropUrl})`
          : "linear-gradient(to right, #0A1A38, #0A1A38)",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(10,26,56,0.85) 0%, rgba(10,26,56,0.6) 100%)",
        }}
      />
      <div
        style={{
          position: "relative",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "48px 32px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 700,
            color: "white",
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          {t("hero.welcome")}
        </h2>
        <h3
          style={{
            fontSize: "clamp(18px, 3vw, 32px)",
            fontWeight: 500,
            color: "white",
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          {t("hero.subtitle")}
        </h3>
        <form
          action="/search"
          method="GET"
          style={{ display: "flex", marginTop: "12px", width: "100%" }}
        >
          <input
            type="text"
            name="query"
            placeholder={t("hero.searchPlaceholder")}
            required
            style={{
              flex: 1,
              padding: "14px 20px",
              fontSize: "16px",
              border: "none",
              borderRadius: "30px 0 0 30px",
              outline: "none",
              color: "#333",
              backgroundColor: "white",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "14px 28px",
              fontSize: "16px",
              fontWeight: 700,
              border: "none",
              borderRadius: "0 30px 30px 0",
              cursor: "pointer",
              background: "linear-gradient(to left, #D2E4C7, #92B079)",
              color: "#0A1A38",
              whiteSpace: "nowrap",
              transition: "opacity 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {t("hero.searchButton")}
          </button>
        </form>
      </div>
    </section>
  );
}
