"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
        bottom: "-18px",
        left: "8px",
        width: "46px",
        height: "46px",
        borderRadius: "50%",
        backgroundColor: "#0A1A38",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width="40" height="40" viewBox="0 0 40 40">
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
        <text x="20" y="23" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">
          {percentage}
          <tspan fontSize="6" dy="-5">%</tspan>
        </text>
      </svg>
    </div>
  );
}

function ProviderBadges({ providers }) {
  if (!providers || providers.length === 0) return null;

  return (
    <div
      style={{
        display: "flex",
        gap: "4px",
        marginTop: "6px",
        flexWrap: "wrap",
      }}
    >
      {providers.slice(0, 3).map((p) => (
        <Image
          key={p.provider_id}
          src={`https://image.tmdb.org/t/p/w45${p.logo_path}`}
          width={24}
          height={24}
          alt={p.provider_name}
          title={p.provider_name}
          style={{
            borderRadius: "4px",
            width: "24px",
            height: "24px",
          }}
        />
      ))}
      {providers.length > 3 && (
        <span
          className="text-black/40 dark:text-white/50"
          style={{
            fontSize: "11px",
            alignSelf: "center",
            marginLeft: "2px",
          }}
        >
          +{providers.length - 3}
        </span>
      )}
    </div>
  );
}

export default function MovieCard({ item, mediaType, fullWidth = false, providers }) {
  const router = useRouter();
  const title = item.title || item.name;
  const date = item.release_date || item.first_air_date;
  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";

  const type = mediaType || (item.media_type === "tv" ? "tv" : "movie");
  const routePath = type === "tv" ? "tvshow" : "movie";

  return (
    <div
      onClick={() => router.push(`/${routePath}/${item.id}`)}
      style={{
        flex: fullWidth ? "1 1 auto" : "0 0 185px",
        width: fullWidth ? "100%" : undefined,
        cursor: "pointer",
        transition: "transform 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div style={{ position: "relative" }}>
        <Image
          src={
            item.poster_path
              ? `https://image.tmdb.org/t/p/w185${item.poster_path}`
              : "/placeholder-image.svg"
          }
          width={185}
          height={278}
          alt={title || "Movie poster"}
          loading="lazy"
          style={{
            borderRadius: "8px",
            width: fullWidth ? "100%" : "185px",
            height: fullWidth ? "auto" : "278px",
            aspectRatio: fullWidth ? "2/3" : undefined,
            objectFit: "cover",
          }}
        />
        <RatingBadge rating={item.vote_average || 0} />
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
        <p
          className="text-[#666] dark:text-white/50"
          style={{
            fontSize: "13px",
            margin: "4px 0 0 0",
          }}
        >
          {formattedDate}
        </p>
        <ProviderBadges providers={providers} />
      </div>
    </div>
  );
}
