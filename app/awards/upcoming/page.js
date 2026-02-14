"use client";
import React from "react";
import { UPCOMING_AWARDS } from "@/data/awardsData";
import { useTranslation } from "@/hooks/useTranslation";

export default function UpcomingAwardsPage() {
  const { t } = useTranslation();

  return (
    <main
      style={{
        maxWidth: "900px",
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
          {t("awards.upcoming")}
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "rgba(255,255,255,0.85)",
            marginTop: "12px",
            marginBottom: 0,
          }}
        >
          {t("awards.upcomingSubtitle")}
        </p>
      </div>

      {/* Upcoming List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {UPCOMING_AWARDS.map((award, i) => {
          const eventDate = new Date(award.date);
          const now = new Date();
          const diff = eventDate - now;
          const daysLeft = Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));

          return (
            <div
              key={i}
              className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-[#333]"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                padding: "20px 24px",
                borderRadius: "10px",
              }}
            >
              {/* Date badge */}
              <div
                className="bg-primary dark:bg-white/10"
                style={{
                  flexShrink: 0,
                  width: "60px",
                  height: "60px",
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: 700, lineHeight: 1 }}>
                  {eventDate.getDate()}
                </span>
                <span style={{ fontSize: "11px", textTransform: "uppercase", opacity: 0.8 }}>
                  {eventDate.toLocaleString("en", { month: "short" })}
                </span>
              </div>

              {/* Info */}
              <div style={{ flex: 1 }}>
                <h3
                  className="text-primary dark:text-white"
                  style={{ fontSize: "16px", fontWeight: 700, margin: 0 }}
                >
                  {award.name}
                </h3>
                <p
                  className="text-gray-500 dark:text-white/50"
                  style={{ fontSize: "13px", margin: "4px 0 0 0" }}
                >
                  {award.description}
                </p>
              </div>

              {/* Countdown */}
              <div style={{ flexShrink: 0, textAlign: "right" }}>
                {daysLeft > 0 ? (
                  <>
                    <span
                      className="text-primary dark:text-accent"
                      style={{ fontSize: "20px", fontWeight: 700 }}
                    >
                      {daysLeft}
                    </span>
                    <span
                      className="text-gray-400 dark:text-white/40"
                      style={{ fontSize: "12px", display: "block" }}
                    >
                      {t("awards.daysLeft")}
                    </span>
                  </>
                ) : (
                  <span
                    className="text-brand"
                    style={{ fontSize: "13px", fontWeight: 600 }}
                  >
                    {t("awards.completed")}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
