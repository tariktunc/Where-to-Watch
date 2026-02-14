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
    <div className="absolute -bottom-4 left-2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0A1A38] flex items-center justify-center border-2 border-[#0A1A38]">
      <svg className="w-[30px] h-[30px] sm:w-[34px] sm:h-[34px]" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r={radius} fill="none" stroke="#071228" strokeWidth="3" />
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
    movie: { label: "Film", bg: "bg-blue-700" },
    tv: { label: "TV", bg: "bg-purple-600" },
    person: { label: "Person", bg: "bg-emerald-600" },
    collection: { label: "Collection", bg: "bg-amber-600" },
  };

  const c = config[type];
  if (!c) return null;

  return (
    <span
      className={`absolute top-1.5 right-1.5 sm:top-2 sm:right-2 ${c.bg} text-white text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded uppercase tracking-wide`}
    >
      {c.label}
    </span>
  );
}

export default function MediaCard({
  id,
  title,
  posterPath,
  rating,
  date,
  mediaType,
  showTypeBadge = true,
  department,
  fullWidth = false,
}) {
  const routePath = mediaType === "tv" ? "tvshow" : mediaType === "person" ? "person" : "movie";
  const href = `/${routePath}/${id}`;

  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <Link
      href={href}
      className={
        fullWidth
          ? "block w-full no-underline cursor-pointer transition-transform duration-200 hover:scale-[1.03]"
          : "flex-shrink-0 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] no-underline cursor-pointer transition-transform duration-200 hover:scale-[1.03]"
      }
    >
      <div className="relative">
        <Image
          src={
            posterPath
              ? `https://image.tmdb.org/t/p/w300${posterPath}`
              : "/placeholder-image.svg"
          }
          width={300}
          height={450}
          alt={title || "Poster"}
          loading="lazy"
          className="rounded-lg w-full object-cover"
          style={{ aspectRatio: "2/3" }}
        />
        {showTypeBadge && <MediaTypeBadge type={mediaType} />}
        {mediaType !== "person" && <RatingBadge rating={rating} />}
      </div>
      <div className="pt-5 px-1">
        <p
          className="text-primary dark:text-white text-[13px] sm:text-sm font-bold leading-tight m-0 overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {title}
        </p>
        {mediaType === "person" && department ? (
          <p className="text-[#666] dark:text-white/50 text-xs sm:text-[13px] mt-1 m-0">
            {department}
          </p>
        ) : (
          <p className="text-[#666] dark:text-white/50 text-xs sm:text-[13px] mt-1 m-0">
            {formattedDate}
          </p>
        )}
      </div>
    </Link>
  );
}
