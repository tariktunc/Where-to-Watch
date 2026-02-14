"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

function CastCard({ actor }) {
  return (
    <Link
      href={`/person/${actor.id}`}
      className="bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 hover:scale-[1.03] transition-all"
      style={{
        flex: "0 0 140px",
        borderRadius: "8px",
        overflow: "hidden",
        textDecoration: "none",
      }}
    >
      <div style={{ width: "140px", height: "175px", overflow: "hidden" }}>
        {actor.profile_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
            width={140}
            height={175}
            alt={actor.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div
            className="bg-gray-200 dark:bg-white/10"
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        )}
      </div>
      <div style={{ padding: "8px 10px" }}>
        <p
          className="text-primary dark:text-white"
          style={{
            fontSize: "13px",
            fontWeight: 700,
            margin: 0,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {actor.name}
        </p>
        <p
          className="text-gray-500 dark:text-white/50"
          style={{
            fontSize: "12px",
            margin: "2px 0 0 0",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {actor.character || actor.known_for_department}
        </p>
      </div>
    </Link>
  );
}

export default function DetailCast({ castData }) {
  const { t } = useTranslation();

  if (!castData?.cast || castData.cast.length === 0) return null;

  return (
    <section style={{ marginBottom: "32px" }}>
      <h3
        className="text-primary dark:text-white"
        style={{
          fontSize: "20px",
          fontWeight: 600,
          margin: "0 0 16px 0",
        }}
      >
        {t("detail.topCast")}
      </h3>
      <div
        className="custom-scrollbar"
        style={{
          display: "flex",
          gap: "12px",
          overflowX: "auto",
          overflowY: "hidden",
          paddingBottom: "12px",
        }}
      >
        {castData.cast.slice(0, 12).map((actor) => (
          <CastCard key={actor.credit_id || actor.id} actor={actor} />
        ))}
      </div>
    </section>
  );
}
