"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { AWARD_SHOWS } from "@/data/awardsData";
import { fetchUrlTheMovieDb } from "@/utils/apiService";
import { useTranslation } from "@/hooks/useTranslation";

function RatingBadge({ rating }) {
  if (!rating || rating === 0) return null;

  const percentage = Math.round(rating * 10);
  const radius = 14;
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
        width: "36px",
        height: "36px",
        borderRadius: "50%",
        backgroundColor: "#0A1A38",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <svg width="30" height="30" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r={radius} fill="none" stroke="#071228" strokeWidth="2" />
        <circle
          cx="18"
          cy="18"
          r={radius}
          fill="none"
          stroke={getColor(percentage)}
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 18 18)"
        />
        <text x="18" y="21" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">
          {percentage}
          <tspan fontSize="4" dy="-3">%</tspan>
        </text>
      </svg>
    </div>
  );
}

function CategorySection({ category, movieData }) {
  const { t } = useTranslation();
  const winnerData = movieData[category.winner.tmdbId];

  return (
    <div style={{ marginBottom: "8px" }}>
      <h4
        className="text-primary dark:text-white"
        style={{ fontSize: "17px", fontWeight: 700, margin: "0 0 16px 0" }}
      >
        {category.name}
      </h4>

      {/* Winner */}
      <div
        style={{
          marginBottom: "16px",
          padding: "16px",
          borderRadius: "12px",
          border: "2px solid rgba(255, 215, 0, 0.3)",
          background: "linear-gradient(135deg, rgba(255,215,0,0.05), rgba(255,215,0,0.02))",
          animation: "scaleIn 0.4s ease forwards",
        }}
        className="dark:border-[#FFD700]/20"
      >
        <span
          style={{
            fontSize: "11px",
            fontWeight: 700,
            padding: "3px 10px",
            borderRadius: "6px",
            display: "inline-block",
            marginBottom: "12px",
            background: "linear-gradient(135deg, #FFD700, #FFA000)",
            color: "#5D4037",
          }}
        >
          {t("awards.winner")}
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {winnerData?.poster_path ? (
            <Link href={`/movie/${category.winner.tmdbId}`}>
              <Image
                src={`https://image.tmdb.org/t/p/w185${winnerData.poster_path}`}
                width={140}
                height={210}
                alt={category.winner.title}
                loading="lazy"
                style={{
                  borderRadius: "8px",
                  width: "100px",
                  height: "150px",
                  objectFit: "cover",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </Link>
          ) : (
            <div
              className="bg-gray-200 dark:bg-white/10"
              style={{
                width: "100px",
                height: "150px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "32px",
              }}
            >
              {"\uD83C\uDFAC"}
            </div>
          )}
          <div style={{ flex: 1, minWidth: 0 }}>
            <p
              className="text-primary dark:text-white"
              style={{ fontSize: "16px", fontWeight: 700, margin: "0 0 4px 0" }}
            >
              {category.winner.title}
            </p>
            {category.winner.subtitle && (
              <p
                className="text-gray-500 dark:text-white/50"
                style={{ fontSize: "14px", margin: "0 0 8px 0" }}
              >
                {category.winner.subtitle}
              </p>
            )}
            {winnerData?.vote_average > 0 && (
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <RatingBadge rating={winnerData.vote_average} />
                <span className="text-gray-400 dark:text-white/40" style={{ fontSize: "12px" }}>
                  {winnerData.vote_average.toFixed(1)}/10
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Nominees */}
      {category.nominees && category.nominees.length > 0 && (
        <div>
          <span
            className="text-gray-400 dark:text-white/40"
            style={{
              fontSize: "11px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              display: "inline-block",
              marginBottom: "10px",
            }}
          >
            {t("awards.nominees")}
          </span>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "12px",
            }}
          >
            {category.nominees.map((nominee, i) => {
              const nomData = movieData[nominee.tmdbId];
              return (
                <Link
                  key={i}
                  href={`/movie/${nominee.tmdbId}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    textDecoration: "none",
                    padding: "10px",
                    borderRadius: "10px",
                    transition: "all 0.2s ease",
                  }}
                  className="hover:bg-gray-50 dark:hover:bg-white/5"
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "translateX(2px)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "translateX(0)")}
                >
                  {nomData?.poster_path ? (
                    <Image
                      src={`https://image.tmdb.org/t/p/w154${nomData.poster_path}`}
                      width={80}
                      height={120}
                      alt={nominee.title}
                      loading="lazy"
                      style={{
                        borderRadius: "6px",
                        width: "56px",
                        height: "84px",
                        objectFit: "cover",
                        flexShrink: 0,
                      }}
                    />
                  ) : (
                    <div
                      className="bg-gray-200 dark:bg-white/10"
                      style={{
                        width: "56px",
                        height: "84px",
                        borderRadius: "6px",
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "18px",
                      }}
                    >
                      {"\uD83C\uDFAC"}
                    </div>
                  )}
                  <div style={{ minWidth: 0 }}>
                    <p
                      className="text-primary dark:text-white/80"
                      style={{
                        fontSize: "13px",
                        fontWeight: 600,
                        margin: 0,
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {nominee.title}
                    </p>
                    {nominee.subtitle && (
                      <p
                        className="text-gray-400 dark:text-white/40"
                        style={{ fontSize: "12px", margin: "2px 0 0 0" }}
                      >
                        {nominee.subtitle}
                      </p>
                    )}
                    {nomData?.vote_average > 0 && (
                      <span className="text-gray-400 dark:text-white/40" style={{ fontSize: "11px" }}>
                        {nomData.vote_average.toFixed(1)}/10
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function AwardDetailPage() {
  const params = useParams();
  const { t, locale } = useTranslation();
  const [activeYear, setActiveYear] = useState(null);
  const [movieData, setMovieData] = useState({});

  const show = AWARD_SHOWS.find((s) => s.id === params.id);

  useEffect(() => {
    if (!show || show.editions.length === 0) return;
    setActiveYear(show.editions[0].year);
  }, [show]);

  // Fetch movie data (poster + rating) for active year
  useEffect(() => {
    if (!show || !activeYear) return;

    const edition = show.editions.find((e) => e.year === activeYear);
    if (!edition) return;

    const tmdbIds = new Set();
    edition.categories.forEach((cat) => {
      if (cat.winner?.tmdbId) tmdbIds.add(cat.winner.tmdbId);
      cat.nominees?.forEach((n) => {
        if (n.tmdbId) tmdbIds.add(n.tmdbId);
      });
    });

    const fetchMovies = async () => {
      const newData = { ...movieData };
      const idsToFetch = [...tmdbIds].filter((id) => !newData[id]);

      if (idsToFetch.length === 0) return;

      await Promise.all(
        idsToFetch.map(async (id) => {
          try {
            const res = await fetchUrlTheMovieDb(
              `https://api.themoviedb.org/3/movie/${id}?language=${locale}`
            );
            if (res?.data) {
              newData[id] = {
                poster_path: res.data.poster_path,
                vote_average: res.data.vote_average,
              };
            }
          } catch {
            // skip
          }
        })
      );
      setMovieData(newData);
    };

    fetchMovies();
  }, [activeYear, locale, show]);

  if (!show) {
    return (
      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 32px", textAlign: "center" }}>
        <h1 className="text-primary dark:text-white" style={{ fontSize: "24px", fontWeight: 700 }}>
          Award show not found
        </h1>
        <Link href="/awards" className="text-primary dark:text-accent" style={{ fontSize: "14px" }}>
          {t("awards.backToAwards")}
        </Link>
      </main>
    );
  }

  if (show.editions.length === 0) {
    return (
      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 32px", minHeight: "60vh" }}>
        <Link
          href="/awards"
          className="text-primary dark:text-accent"
          style={{ fontSize: "14px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "20px" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
          {t("awards.backToAwards")}
        </Link>
        <h1 className="text-primary dark:text-white" style={{ fontSize: "28px", fontWeight: 700, margin: "0 0 12px 0" }}>
          {show.name}
        </h1>
        <p className="text-gray-500 dark:text-white/50" style={{ fontSize: "15px" }}>
          {show.description}
        </p>
        <p className="text-gray-400 dark:text-white/40" style={{ fontSize: "14px", marginTop: "20px" }}>
          {t("awards.detailedDataComingSoon")}
        </p>
      </main>
    );
  }

  const activeEdition = show.editions.find((e) => e.year === activeYear);

  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 24px", minHeight: "60vh" }}>
      <Link
        href="/awards"
        className="text-primary dark:text-accent"
        style={{
          fontSize: "14px",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          marginBottom: "20px",
          transition: "opacity 0.2s",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5" />
          <path d="m12 19-7-7 7-7" />
        </svg>
        {t("awards.backToAwards")}
      </Link>

      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #0A1A38 0%, #1a3a6e 50%, #2a5a9e 100%)",
          borderRadius: "16px",
          padding: "40px",
          marginBottom: "28px",
          position: "relative",
          overflow: "hidden",
          animation: "fadeInUp 0.6s ease forwards",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-40px",
            right: "-20px",
            fontSize: "160px",
            opacity: 0.06,
            transform: "rotate(-15deg)",
          }}
        >
          {"\uD83C\uDFC6"}
        </div>
        <h1 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, color: "white", margin: 0, position: "relative" }}>
          {show.name}
        </h1>
        <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", marginTop: "8px", marginBottom: 0, position: "relative" }}>
          {show.description}
        </p>
      </div>

      {/* Year tabs */}
      <div
        className="custom-scrollbar"
        style={{
          display: "flex",
          gap: "8px",
          overflowX: "auto",
          paddingBottom: "16px",
          marginBottom: "28px",
        }}
      >
        {show.editions.map((edition) => (
          <button
            key={edition.year}
            onClick={() => setActiveYear(edition.year)}
            className={
              activeYear === edition.year
                ? "bg-primary dark:bg-white/15 text-white"
                : "bg-gray-100 dark:bg-white/5 text-primary dark:text-white/70 hover:bg-gray-200 dark:hover:bg-white/10"
            }
            style={{
              padding: "10px 24px",
              fontSize: "15px",
              fontWeight: 600,
              border: "none",
              borderRadius: "24px",
              cursor: "pointer",
              transition: "all 0.2s ease",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            {edition.year}
          </button>
        ))}
      </div>

      {/* Active edition */}
      {activeEdition && (
        <div style={{ animation: "fadeInUp 0.4s ease forwards" }}>
          <div style={{ marginBottom: "24px" }}>
            <h2
              className="text-primary dark:text-white"
              style={{ fontSize: "22px", fontWeight: 700, margin: "0 0 6px 0" }}
            >
              {activeEdition.ceremony}
            </h2>
            <p
              className="text-gray-400 dark:text-white/40"
              style={{ fontSize: "14px", margin: 0 }}
            >
              {new Date(activeEdition.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
              gap: "24px",
            }}
          >
            {activeEdition.categories.map((category, i) => (
              <div
                key={`${activeYear}-${i}`}
                className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10"
                style={{
                  borderRadius: "14px",
                  padding: "24px",
                  animation: `fadeInUp 0.4s ease ${i * 0.08}s both`,
                }}
              >
                <CategorySection category={category} movieData={movieData} />
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
