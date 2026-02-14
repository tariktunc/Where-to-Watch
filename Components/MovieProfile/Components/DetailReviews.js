"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

function StarRating({ rating }) {
  const stars = Math.round(rating / 2);
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i <= stars ? "#FFD700" : "none"}
          stroke={i <= stars ? "#FFD700" : "#999"}
          strokeWidth="2"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const content = review.content || "";
  const isLong = content.length > 300;
  const displayContent = expanded ? content : content.substring(0, 300);

  const avatarPath = review.author_details?.avatar_path;
  let avatarUrl = null;
  if (avatarPath) {
    if (avatarPath.startsWith("/http")) {
      avatarUrl = avatarPath.substring(1);
    } else {
      avatarUrl = `https://image.tmdb.org/t/p/w45${avatarPath}`;
    }
  }

  const rating = review.author_details?.rating;
  const date = review.created_at
    ? new Date(review.created_at).toLocaleDateString()
    : "";

  return (
    <div
      className="border border-gray-200 dark:border-[#333]"
      style={{
        padding: "20px",
        borderRadius: "8px",
        marginBottom: "12px",
      }}
    >
      {/* Author row */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
        <div
          className="bg-gray-200 dark:bg-white/10"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            overflow: "hidden",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              width={40}
              height={40}
              alt={review.author}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <span
              className="text-primary dark:text-white"
              style={{ fontSize: "16px", fontWeight: 700 }}
            >
              {review.author?.charAt(0)?.toUpperCase() || "?"}
            </span>
          )}
        </div>
        <div style={{ flex: 1 }}>
          <p
            className="text-primary dark:text-white"
            style={{ fontSize: "14px", fontWeight: 700, margin: 0 }}
          >
            {review.author}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "2px" }}>
            {rating && <StarRating rating={rating} />}
            {date && (
              <span
                className="text-gray-400 dark:text-white/40"
                style={{ fontSize: "12px" }}
              >
                {date}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <p
        className="text-gray-700 dark:text-white/80"
        style={{
          fontSize: "14px",
          lineHeight: 1.7,
          margin: 0,
          whiteSpace: "pre-line",
        }}
      >
        {displayContent}
        {isLong && !expanded && "..."}
      </p>
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-primary dark:text-accent"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "13px",
            fontWeight: 600,
            padding: "4px 0",
            marginTop: "4px",
          }}
        >
          {expanded ? t("detail.showLess") : t("detail.readMore")}
        </button>
      )}
    </div>
  );
}

export default function DetailReviews({ reviews }) {
  const { t } = useTranslation();

  if (!reviews?.results || reviews.results.length === 0) {
    return null;
  }

  return (
    <section style={{ marginBottom: "32px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
        <h3
          className="text-primary dark:text-white"
          style={{ fontSize: "20px", fontWeight: 600, margin: 0 }}
        >
          {t("detail.reviews")}
        </h3>
        <span
          className="bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-white/60"
          style={{
            fontSize: "12px",
            fontWeight: 700,
            padding: "2px 8px",
            borderRadius: "10px",
          }}
        >
          {reviews.results.length}
        </span>
      </div>

      {reviews.results.slice(0, 5).map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </section>
  );
}
