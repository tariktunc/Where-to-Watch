"use client";
import React from "react";
import Link from "next/link";
import { AWARD_SHOWS } from "@/data/awardsData";
import { useTranslation } from "@/hooks/useTranslation";

const EMOJI_MAP = {
  oscar: "\uD83C\uDFC6",
  "golden-globe": "\uD83C\uDF10",
  bafta: "\uD83C\uDFAD",
  emmy: "\uD83D\uDCFA",
  sag: "\uD83C\uDFAC",
  cannes: "\uD83C\uDFB4",
  dga: "\uD83C\uDFA5",
};

const GRADIENT_MAP = {
  oscar: "linear-gradient(135deg, #FFD700, #B8860B)",
  "golden-globe": "linear-gradient(135deg, #FFD700, #DAA520)",
  bafta: "linear-gradient(135deg, #C0C0C0, #808080)",
  emmy: "linear-gradient(135deg, #CD7F32, #8B4513)",
  sag: "linear-gradient(135deg, #4A90D9, #2E5A88)",
  cannes: "linear-gradient(135deg, #E8D5B7, #C4A265)",
  dga: "linear-gradient(135deg, #722F37, #4A1C22)",
};

export default function AwardsPage() {
  const { t } = useTranslation();

  return (
    <main
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "40px 24px",
        minHeight: "60vh",
      }}
    >
      {/* Animated Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #0A1A38 0%, #1a3a6e 50%, #2a5a9e 100%)",
          borderRadius: "16px",
          padding: "48px 40px",
          marginBottom: "40px",
          position: "relative",
          overflow: "hidden",
          animation: "fadeInUp 0.6s ease forwards",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-50px",
            right: "-30px",
            fontSize: "180px",
            opacity: 0.06,
            transform: "rotate(-15deg)",
          }}
        >
          {"\uD83C\uDFC6"}
        </div>
        <h1
          style={{
            fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: 800,
            color: "white",
            margin: 0,
            position: "relative",
          }}
        >
          {t("awards.title")}
        </h1>
        <p
          style={{
            fontSize: "clamp(14px, 2.5vw, 18px)",
            color: "rgba(255,255,255,0.8)",
            marginTop: "12px",
            marginBottom: 0,
            maxWidth: "600px",
            lineHeight: 1.6,
            position: "relative",
          }}
        >
          {t("awards.subtitle")}
        </p>
      </div>

      {/* Awards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "24px",
        }}
      >
        {AWARD_SHOWS.map((show, index) => {
          const latestEdition = show.editions?.[0];
          const latestDate = latestEdition?.date || show.latestDate;
          const hasDetail = show.editions && show.editions.length > 0;
          const formattedDate = latestDate
            ? new Date(latestDate).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })
            : "";

          return (
            <Link
              key={show.id}
              href={hasDetail ? `/awards/${show.id}` : "#"}
              className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 group"
              style={{
                display: "block",
                borderRadius: "16px",
                padding: "28px",
                textDecoration: "none",
                transition: "all 0.3s ease",
                cursor: hasDetail ? "pointer" : "default",
                animation: `fadeInUp 0.5s ease ${index * 0.08}s both`,
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Gradient accent bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: GRADIENT_MAP[show.id] || "linear-gradient(135deg, #FFD700, #B8860B)",
                  borderRadius: "16px 16px 0 0",
                }}
              />

              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                {/* Icon circle */}
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "14px",
                    background: GRADIENT_MAP[show.id] || "linear-gradient(135deg, #FFD700, #B8860B)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "28px",
                    flexShrink: 0,
                  }}
                >
                  {EMOJI_MAP[show.id] || "\uD83C\uDFC6"}
                </div>
                <div>
                  <h3
                    className="text-primary dark:text-white"
                    style={{ fontSize: "20px", fontWeight: 700, margin: 0 }}
                  >
                    {show.name}
                  </h3>
                  {formattedDate && (
                    <span
                      className="text-gray-400 dark:text-white/40"
                      style={{ fontSize: "12px" }}
                    >
                      {formattedDate}
                    </span>
                  )}
                </div>
              </div>

              <p
                className="text-gray-600 dark:text-white/60"
                style={{
                  fontSize: "14px",
                  lineHeight: 1.6,
                  margin: "0 0 16px 0",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {show.description}
              </p>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                {hasDetail ? (
                  <span
                    className="text-primary dark:text-accent"
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    {t("awards.viewDetails")}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                ) : (
                  <span
                    className="text-gray-400 dark:text-white/30"
                    style={{ fontSize: "12px", fontStyle: "italic" }}
                  >
                    {t("awards.comingSoon")}
                  </span>
                )}

                {hasDetail && (
                  <span
                    className="bg-primary/5 dark:bg-white/5 text-primary dark:text-white/70"
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      padding: "4px 10px",
                      borderRadius: "12px",
                    }}
                  >
                    {show.editions.length} {show.editions.length > 1 ? "years" : "year"}
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
