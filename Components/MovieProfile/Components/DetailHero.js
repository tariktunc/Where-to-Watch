"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

function RatingCircle({ rating }) {
  const percentage = Math.round(rating * 10);
  const radius = 20;
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
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        backgroundColor: "#0A1A38",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <svg width="52" height="52" viewBox="0 0 52 52">
        <circle cx="26" cy="26" r={radius} fill="none" stroke="#071228" strokeWidth="3" />
        <circle
          cx="26"
          cy="26"
          r={radius}
          fill="none"
          stroke={getColor(percentage)}
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 26 26)"
        />
        <text x="26" y="30" textAnchor="middle" fill="white" fontSize="16" fontWeight="700">
          {percentage}
          <tspan fontSize="8" dy="-6">%</tspan>
        </text>
      </svg>
    </div>
  );
}

function VideoModal({ videoKey, onClose }) {
  if (!videoKey) return null;
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.85)",
      }}
      onClick={onClose}
    >
      <div
        style={{ position: "relative", width: "min(900px, 90vw)", aspectRatio: "16/9" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "-40px",
            right: "0",
            background: "none",
            border: "none",
            color: "white",
            fontSize: "28px",
            cursor: "pointer",
          }}
        >
          &times;
        </button>
        <iframe
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
          style={{ width: "100%", height: "100%", border: "none", borderRadius: "8px" }}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Trailer"
        />
      </div>
    </div>
  );
}

function WatchNowBanner({ watchProviders, countryCode, t }) {
  if (!watchProviders?.results) return null;

  const countryData = watchProviders.results[countryCode];
  if (!countryData) return null;

  const streamProvider = countryData.flatrate?.[0];
  const rentProvider = countryData.rent?.[0];
  const buyProvider = countryData.buy?.[0];

  const provider = streamProvider || rentProvider || buyProvider;
  if (!provider) return null;

  const label = streamProvider
    ? t("detail.nowStreaming")
    : rentProvider
    ? t("detail.availableOn")
    : t("detail.availableOn");

  const link = countryData.link || "#";

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
        padding: "10px 20px 10px 10px",
        borderRadius: "8px",
        backgroundColor: "rgba(255,255,255,0.1)",
        textDecoration: "none",
        color: "white",
        marginTop: "16px",
        transition: "background-color 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)")}
    >
      {provider.logo_path && (
        <Image
          src={`https://image.tmdb.org/t/p/w45${provider.logo_path}`}
          width={36}
          height={36}
          alt={provider.provider_name}
          style={{ borderRadius: "6px", width: "36px", height: "36px" }}
        />
      )}
      <div>
        <div style={{ fontSize: "12px", opacity: 0.8 }}>{label}</div>
        <div style={{ fontSize: "15px", fontWeight: 700 }}>
          {t("detail.watchNow")}
        </div>
      </div>
    </a>
  );
}

export default function DetailHero({ profileData, castData, status, videoData, watchProviders, countryCode }) {
  const { t } = useTranslation();
  const [activeVideo, setActiveVideo] = useState(null);

  const title = status === "tv" ? profileData.name : profileData.title;
  const date = status === "tv" ? profileData.first_air_date : profileData.release_date;
  const year = date ? date.substring(0, 4) : "";
  const genres = profileData.genres?.map((g) => g.name).join(", ") || "";
  const runtime = profileData.runtime
    ? `${Math.floor(profileData.runtime / 60)}h ${profileData.runtime % 60}m`
    : profileData.episode_run_time?.[0]
    ? `${profileData.episode_run_time[0]}m`
    : "";

  const trailer = videoData?.results?.find(
    (v) => v.type === "Trailer" && v.site === "YouTube"
  );

  const directors = castData?.crew?.filter((c) => c.job === "Director").slice(0, 3) || [];
  const writers = castData?.crew
    ?.filter((c) => ["Writer", "Screenplay", "Story"].includes(c.job))
    .slice(0, 3) || [];
  const creators = profileData.created_by?.slice(0, 3) || [];

  const featuredCrew = status === "tv"
    ? creators.map((c) => ({ name: c.name, role: t("detail.creator") }))
    : [
        ...directors.map((d) => ({ name: d.name, role: t("detail.director") })),
        ...writers.map((w) => ({ name: w.name, role: w.job })),
      ].slice(0, 4);

  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: "500px",
          backgroundImage: profileData.backdrop_path
            ? `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${profileData.backdrop_path})`
            : "none",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom right, rgba(10,26,56,0.95) 0%, rgba(10,26,56,0.8) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "40px 32px",
            display: "flex",
            gap: "32px",
            alignItems: "flex-start",
          }}
        >
          {/* Poster */}
          <div
            style={{
              flexShrink: 0,
              width: "300px",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
            }}
          >
            <Image
              src={
                profileData.poster_path
                  ? `https://image.tmdb.org/t/p/w500${profileData.poster_path}`
                  : "/placeholder-image.svg"
              }
              width={300}
              height={450}
              alt={title}
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
            />
          </div>

          {/* Info */}
          <div style={{ flex: 1, color: "white" }}>
            <h1 style={{ fontSize: "32px", fontWeight: 700, margin: 0, lineHeight: 1.2 }}>
              {title}{" "}
              {year && (
                <span style={{ fontWeight: 400, color: "rgba(255,255,255,0.7)" }}>
                  ({year})
                </span>
              )}
            </h1>

            {/* Meta line */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "8px",
                fontSize: "15px",
                color: "rgba(255,255,255,0.7)",
                flexWrap: "wrap",
              }}
            >
              {date && <span>{date}</span>}
              {genres && (
                <>
                  <span style={{ opacity: 0.5 }}>&bull;</span>
                  <span>{genres}</span>
                </>
              )}
              {runtime && (
                <>
                  <span style={{ opacity: 0.5 }}>&bull;</span>
                  <span>{runtime}</span>
                </>
              )}
            </div>

            {/* Rating + Trailer */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginTop: "20px",
              }}
            >
              <RatingCircle rating={profileData.vote_average || 0} />
              <span style={{ fontSize: "14px", fontWeight: 600 }}>
                {t("detail.userScore")}
              </span>

              {trailer && (
                <button
                  onClick={() => setActiveVideo(trailer.key)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "none",
                    border: "none",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "15px",
                    fontWeight: 600,
                    marginLeft: "16px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FF9C43")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  {t("detail.playTrailer")}
                </button>
              )}
            </div>

            {/* Watch Now */}
            <WatchNowBanner watchProviders={watchProviders} countryCode={countryCode} t={t} />

            {/* Tagline */}
            {profileData.tagline && (
              <p
                style={{
                  fontSize: "16px",
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.6)",
                  margin: "20px 0 0 0",
                }}
              >
                {profileData.tagline}
              </p>
            )}

            {/* Overview */}
            <h3 style={{ fontSize: "18px", fontWeight: 600, margin: "16px 0 8px 0" }}>
              {t("detail.overview")}
            </h3>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.85)",
                margin: 0,
              }}
            >
              {profileData.overview || t("detail.noOverview")}
            </p>

            {/* Featured Crew */}
            {featuredCrew.length > 0 && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                  gap: "16px",
                  marginTop: "24px",
                }}
              >
                {featuredCrew.map((crew, i) => (
                  <div key={i}>
                    <p style={{ fontSize: "14px", fontWeight: 700, margin: 0 }}>
                      {crew.name}
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.6)",
                        margin: "2px 0 0 0",
                      }}
                    >
                      {crew.role}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <VideoModal videoKey={activeVideo} onClose={() => setActiveVideo(null)} />
    </>
  );
}
