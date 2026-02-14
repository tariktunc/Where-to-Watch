"use client";
import React from "react";
import { UPCOMING_AWARDS } from "@/data/awardsData";
import { useTranslation } from "@/hooks/useTranslation";

const EMOJI_MAP = {
  "awards.oscar": "\uD83C\uDFC6",
  "awards.goldenGlobe": "\uD83C\uDF10",
  "awards.bafta": "\uD83C\uDFAD",
  "awards.emmy": "\uD83D\uDCFA",
  "awards.sag": "\uD83C\uDFAC",
  "awards.cannes": "\uD83C\uDFB4",
  "awards.dga": "\uD83C\uDFA5",
};

export default function UpcomingAwardsPage() {
  const { t } = useTranslation();

  const now = new Date();
  const completedCount = UPCOMING_AWARDS.filter((a) => new Date(a.date) <= now).length;
  const progressPercent = Math.round((completedCount / UPCOMING_AWARDS.length) * 100);

  return (
    <main
      style={{
        maxWidth: "960px",
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
          marginBottom: "32px",
          position: "relative",
          overflow: "hidden",
          animation: "fadeInUp 0.6s ease forwards",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-40px",
            right: "-20px",
            fontSize: "160px",
            opacity: 0.06,
            transform: "rotate(10deg)",
          }}
        >
          {"\u23F3"}
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
          {t("awards.upcoming")}
        </h1>
        <p
          style={{
            fontSize: "clamp(14px, 2.5vw, 18px)",
            color: "rgba(255,255,255,0.8)",
            marginTop: "12px",
            marginBottom: 0,
            position: "relative",
          }}
        >
          {t("awards.upcomingSubtitle")}
        </p>
      </div>

      {/* Year Progress Bar */}
      <div
        className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10"
        style={{
          borderRadius: "12px",
          padding: "20px 24px",
          marginBottom: "24px",
          animation: "fadeInUp 0.6s ease 0.1s both",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
          <span className="text-primary dark:text-white" style={{ fontSize: "14px", fontWeight: 600 }}>
            {t("awards.seasonProgress")}
          </span>
          <span className="text-gray-500 dark:text-white/50" style={{ fontSize: "13px" }}>
            {completedCount}/{UPCOMING_AWARDS.length}
          </span>
        </div>
        <div
          className="bg-gray-100 dark:bg-white/10"
          style={{ height: "8px", borderRadius: "4px", overflow: "hidden" }}
        >
          <div
            style={{
              width: `${progressPercent}%`,
              height: "100%",
              background: "linear-gradient(90deg, #21d07a, #4CAF50)",
              borderRadius: "4px",
              transition: "width 1s ease",
            }}
          />
        </div>
      </div>

      {/* Upcoming List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {UPCOMING_AWARDS.map((award, i) => {
          const eventDate = new Date(award.date);
          const diff = eventDate - now;
          const daysLeft = Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
          const isCompleted = diff <= 0;
          const emoji = EMOJI_MAP[award.nameKey] || "\uD83C\uDFC6";

          return (
            <div
              key={i}
              className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                padding: "24px",
                borderRadius: "14px",
                transition: "all 0.3s ease",
                animation: `fadeInLeft 0.5s ease ${i * 0.1}s both`,
                opacity: isCompleted ? 0.6 : 1,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateX(4px)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateX(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Date badge */}
              <div
                style={{
                  flexShrink: 0,
                  width: "72px",
                  height: "72px",
                  borderRadius: "14px",
                  background: isCompleted
                    ? "linear-gradient(135deg, #4CAF50, #2E7D32)"
                    : "linear-gradient(135deg, #0A1A38, #1a3a6e)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                <span style={{ fontSize: "22px", fontWeight: 800, lineHeight: 1 }}>
                  {eventDate.getDate()}
                </span>
                <span style={{ fontSize: "11px", textTransform: "uppercase", opacity: 0.8, marginTop: "2px" }}>
                  {eventDate.toLocaleString("en", { month: "short" })}
                </span>
                <span style={{ fontSize: "10px", opacity: 0.6 }}>
                  {eventDate.getFullYear()}
                </span>
              </div>

              {/* Info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                  <span style={{ fontSize: "20px" }}>{emoji}</span>
                  <h3
                    className="text-primary dark:text-white"
                    style={{
                      fontSize: "17px",
                      fontWeight: 700,
                      margin: 0,
                      textDecoration: isCompleted ? "line-through" : "none",
                    }}
                  >
                    {award.name}
                  </h3>
                </div>
                <p
                  className="text-gray-500 dark:text-white/50"
                  style={{ fontSize: "13px", margin: "4px 0 0 0", lineHeight: 1.4 }}
                >
                  {award.description}
                </p>
              </div>

              {/* Countdown */}
              <div style={{ flexShrink: 0, textAlign: "center", minWidth: "80px" }}>
                {isCompleted ? (
                  <div
                    style={{
                      background: "linear-gradient(135deg, #4CAF50, #2E7D32)",
                      color: "white",
                      padding: "6px 14px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    {t("awards.completed")}
                  </div>
                ) : (
                  <div>
                    <span
                      className="text-primary dark:text-accent"
                      style={{
                        fontSize: "28px",
                        fontWeight: 800,
                        display: "block",
                        lineHeight: 1,
                        animation: "pulse 2s ease-in-out infinite",
                      }}
                    >
                      {daysLeft}
                    </span>
                    <span
                      className="text-gray-400 dark:text-white/40"
                      style={{ fontSize: "11px", fontWeight: 500 }}
                    >
                      {t("awards.daysLeft")}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
