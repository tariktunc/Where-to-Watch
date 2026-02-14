"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function RatingBadge({ rating }) {
  if (!rating || rating === 0) return null;

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
        bottom: "-18px",
        left: "8px",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "#0A1A38",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width="34" height="34" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r={radius} fill="none" stroke="#071228" strokeWidth="2.5" />
        <circle
          cx="20"
          cy="20"
          r={radius}
          fill="none"
          stroke={getColor(percentage)}
          strokeWidth="2.5"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 20 20)"
        />
        <text x="20" y="23" textAnchor="middle" fill="white" fontSize="12" fontWeight="700">
          {percentage}
          <tspan fontSize="5" dy="-4">%</tspan>
        </text>
      </svg>
    </div>
  );
}

function MediaTypeBadge({ type }) {
  const config = {
    movie: { label: "Film", bg: "#1d4ed8" },
    tv: { label: "TV", bg: "#7c3aed" },
    person: { label: "Person", bg: "#059669" },
    collection: { label: "Collection", bg: "#d97706" },
  };

  const c = config[type] || config.movie;

  return (
    <span
      style={{
        position: "absolute",
        top: "8px",
        right: "8px",
        backgroundColor: c.bg,
        color: "white",
        fontSize: "10px",
        fontWeight: 700,
        padding: "2px 8px",
        borderRadius: "4px",
        textTransform: "uppercase",
        letterSpacing: "0.5px",
      }}
    >
      {c.label}
    </span>
  );
}

export default function Card({ title, src, link, voteAverage, releaseDate, mediaType, department }) {
  const formattedDate = releaseDate
    ? new Date(releaseDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <Link
      href={link}
      style={{
        flex: "0 0 185px",
        textDecoration: "none",
        cursor: "pointer",
        transition: "transform 0.2s ease",
        animation: "fadeInUp 0.4s ease forwards",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div style={{ position: "relative" }}>
        <Image
          src={
            src
              ? `https://image.tmdb.org/t/p/w185${src}`
              : "/placeholder-image.svg"
          }
          width={185}
          height={278}
          alt={title || "Poster"}
          loading="lazy"
          style={{
            borderRadius: "8px",
            width: "185px",
            height: "278px",
            objectFit: "cover",
          }}
        />
        <MediaTypeBadge type={mediaType} />
        {mediaType !== "person" && <RatingBadge rating={voteAverage} />}
      </div>
      <div style={{ paddingTop: "20px", paddingLeft: "4px", paddingRight: "4px" }}>
        <p
          className="text-primary dark:text-white"
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
        {mediaType === "person" && department ? (
          <p
            className="text-[#666] dark:text-white/50"
            style={{ fontSize: "13px", margin: "4px 0 0 0" }}
          >
            {department}
          </p>
        ) : (
          <p
            className="text-[#666] dark:text-white/50"
            style={{ fontSize: "13px", margin: "4px 0 0 0" }}
          >
            {formattedDate}
          </p>
        )}
      </div>
    </Link>
  );
}
