"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

const BADGE_CONFIG = {
  movie: { color: "#0A1A38", key: "search.typeMovie" },
  tv: { color: "#0A1A38", key: "search.typeTv" },
  person: { color: "#92B079", key: "search.typePerson" },
};

function getLink(result) {
  if (result.media_type === "movie") return `/movie/${result.id}`;
  if (result.media_type === "tv") return `/tvshow/${result.id}`;
  return `/person/${result.id}`;
}

function getSubtitle(result) {
  if (result.media_type === "person") {
    return result.known_for_department || "";
  }
  const date = result.release_date || result.first_air_date || "";
  return date ? date.substring(0, 4) : "";
}

function getThumbnail(result) {
  const path = result.poster_path || result.profile_path;
  if (path) return `https://image.tmdb.org/t/p/w92${path}`;
  return null;
}

export default function SearchResultItem({ result, onClose }) {
  const { t } = useTranslation();

  const title = result.title || result.name || "";
  const subtitle = getSubtitle(result);
  const thumbnail = getThumbnail(result);
  const link = getLink(result);
  const badge = BADGE_CONFIG[result.media_type] || BADGE_CONFIG.movie;

  return (
    <Link
      href={link}
      onClick={onClose}
      className="hover:bg-[#f5f5f5] dark:hover:bg-surface-dark-hover"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "10px 16px",
        textDecoration: "none",
        color: "inherit",
        transition: "background-color 0.1s",
      }}
    >
      {/* Thumbnail */}
      <div
        className="bg-[#e5e5e5] dark:bg-[#333]"
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "6px",
          overflow: "hidden",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {thumbnail ? (
          <Image
            src={thumbnail}
            width={48}
            height={48}
            alt={title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="stroke-[#999] dark:stroke-[#666]"
            strokeWidth="1.5"
          >
            {result.media_type === "person" ? (
              <>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </>
            ) : (
              <>
                <rect x="2" y="2" width="20" height="20" rx="2" />
                <path d="m10 8 6 4-6 4V8z" />
              </>
            )}
          </svg>
        )}
      </div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          className="text-[#333] dark:text-[#f0f0f0]"
          style={{
            fontWeight: 600,
            fontSize: "14px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </div>
        {subtitle && (
          <div
            className="text-[#888] dark:text-[#aaa]"
            style={{
              fontSize: "12px",
              marginTop: "2px",
            }}
          >
            {subtitle}
          </div>
        )}
      </div>

      {/* Badge */}
      <span
        style={{
          fontSize: "11px",
          fontWeight: 600,
          padding: "2px 8px",
          borderRadius: "4px",
          backgroundColor: badge.color,
          color: "white",
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}
      >
        {t(badge.key)}
      </span>
    </Link>
  );
}
