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
  cannes: "\uD83C\uDF34",
  dga: "\uD83C\uDFA5",
};

export default function AwardsPage() {
  const { t } = useTranslation();

  return (
    <main
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "40px 32px",
        minHeight: "60vh",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #0A1A38, #1a3a6e)",
          borderRadius: "12px",
          padding: "40px",
          marginBottom: "32px",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            fontWeight: 700,
            color: "white",
            margin: 0,
          }}
        >
          {t("awards.title")}
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "rgba(255,255,255,0.85)",
            marginTop: "12px",
            marginBottom: 0,
          }}
        >
          {t("awards.subtitle")}
        </p>
      </div>

      {/* Awards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {AWARD_SHOWS.map((show) => {
          const latestEdition = show.editions?.[0];
          const latestDate = latestEdition?.date || show.latestDate;
          const hasDetail = show.editions && show.editions.length > 0;

          return (
            <Link
              key={show.id}
              href={hasDetail ? `/awards/${show.id}` : "#"}
              className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-[#333] hover:shadow-lg hover:scale-[1.02]"
              style={{
                display: "block",
                borderRadius: "12px",
                padding: "24px",
                textDecoration: "none",
                transition: "all 0.2s ease",
                cursor: hasDetail ? "pointer" : "default",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <span style={{ fontSize: "32px" }}>{EMOJI_MAP[show.id] || "\uD83C\uDFC6"}</span>
                <h3
                  className="text-primary dark:text-white"
                  style={{ fontSize: "18px", fontWeight: 700, margin: 0 }}
                >
                  {show.name}
                </h3>
              </div>
              <p
                className="text-gray-600 dark:text-white/60"
                style={{
                  fontSize: "14px",
                  lineHeight: 1.5,
                  margin: "0 0 12px 0",
                }}
              >
                {show.description}
              </p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                {latestDate && (
                  <span
                    className="text-gray-400 dark:text-white/40"
                    style={{ fontSize: "13px" }}
                  >
                    {t("awards.latestCeremony")}: {latestDate}
                  </span>
                )}
                {hasDetail && (
                  <span
                    className="text-primary dark:text-accent"
                    style={{ fontSize: "13px", fontWeight: 600 }}
                  >
                    {t("awards.viewDetails")} →
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
