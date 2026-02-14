"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

function WatchProviders({ watchProviders, countryCode }) {
  const { t } = useTranslation();

  if (!watchProviders?.results) return null;

  const countryData = watchProviders.results[countryCode];
  if (!countryData) {
    return (
      <div style={{ marginBottom: "24px" }}>
        <h4 className="text-primary dark:text-white" style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 8px 0" }}>
          {t("detail.whereToWatch")}
        </h4>
        <p className="text-gray-500 dark:text-white/50" style={{ fontSize: "13px", margin: 0 }}>
          {t("detail.notAvailable")}
        </p>
      </div>
    );
  }

  const sections = [
    { key: "flatrate", label: t("detail.stream") },
    { key: "rent", label: t("detail.rent") },
    { key: "buy", label: t("detail.buy") },
  ];

  return (
    <div style={{ marginBottom: "24px" }}>
      <h4 className="text-primary dark:text-white" style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 12px 0" }}>
        {t("detail.whereToWatch")}
      </h4>
      {sections.map(({ key, label }) => {
        const providers = countryData[key];
        if (!providers || providers.length === 0) return null;
        return (
          <div key={key} style={{ marginBottom: "12px" }}>
            <p
              className="text-gray-500 dark:text-white/50"
              style={{
                fontSize: "12px",
                fontWeight: 600,
                margin: "0 0 6px 0",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              {label}
            </p>
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {providers.map((p) => (
                <Link
                  key={p.provider_id}
                  href={countryData.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={p.provider_name}
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/w45${p.logo_path}`}
                    width={36}
                    height={36}
                    alt={p.provider_name}
                    style={{ borderRadius: "6px", width: "36px", height: "36px" }}
                  />
                </Link>
              ))}
            </div>
          </div>
        );
      })}
      <p className="text-gray-400 dark:text-white/30" style={{ fontSize: "11px", margin: "8px 0 0 0" }}>
        {t("detail.justWatchAttribution")}
      </p>
    </div>
  );
}

function FactsPanel({ profileData, status }) {
  const { t } = useTranslation();

  const facts = [];

  // Original Title (only if different from display title)
  const displayTitle = status === "tv" ? profileData.name : profileData.title;
  const originalTitle = status === "tv" ? profileData.original_name : profileData.original_title;
  if (originalTitle && originalTitle !== displayTitle) {
    facts.push({ label: t("detail.originalTitle"), value: originalTitle });
  }

  if (profileData.status) {
    facts.push({ label: t("detail.status"), value: profileData.status });
  }
  if (profileData.original_language) {
    facts.push({
      label: t("detail.originalLanguage"),
      value: profileData.original_language.toUpperCase(),
    });
  }
  if (status === "movie") {
    if (profileData.budget > 0) {
      facts.push({
        label: t("detail.budget"),
        value: `$${profileData.budget.toLocaleString()}`,
      });
    }
    if (profileData.revenue > 0) {
      facts.push({
        label: t("detail.revenue"),
        value: `$${profileData.revenue.toLocaleString()}`,
      });
    }
  }
  if (status === "tv") {
    if (profileData.number_of_seasons) {
      facts.push({
        label: t("detail.seasons"),
        value: profileData.number_of_seasons,
      });
    }
    if (profileData.number_of_episodes) {
      facts.push({
        label: t("detail.episodes"),
        value: profileData.number_of_episodes,
      });
    }
  }

  // Popularity
  if (profileData.popularity) {
    facts.push({
      label: t("detail.popularityTrend"),
      value: Math.round(profileData.popularity).toLocaleString(),
    });
  }

  if (facts.length === 0) return null;

  return (
    <div style={{ marginBottom: "24px" }}>
      {facts.map((fact, i) => (
        <div key={i} style={{ marginBottom: "12px" }}>
          <p
            className="text-primary dark:text-white"
            style={{
              fontSize: "14px",
              fontWeight: 600,
              margin: 0,
            }}
          >
            {fact.label}
          </p>
          <p
            className="text-gray-600 dark:text-white/60"
            style={{
              fontSize: "14px",
              margin: "2px 0 0 0",
            }}
          >
            {fact.value}
          </p>
        </div>
      ))}
    </div>
  );
}

function Keywords({ keywords, status }) {
  const { t } = useTranslation();

  const items = status === "movie"
    ? keywords?.keywords || []
    : keywords?.results || [];

  if (items.length === 0) return null;

  return (
    <div style={{ marginBottom: "24px" }}>
      <h4 className="text-primary dark:text-white" style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 10px 0" }}>
        {t("detail.keywords")}
      </h4>
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        {items.slice(0, 15).map((kw) => (
          <span
            key={kw.id}
            className="bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/70"
            style={{
              fontSize: "12px",
              padding: "4px 10px",
              borderRadius: "4px",
            }}
          >
            {kw.name}
          </span>
        ))}
      </div>
    </div>
  );
}

function TopContributors({ castData, status }) {
  const { t } = useTranslation();

  if (!castData?.crew) return null;

  const targetJobs = ["Director", "Writer", "Screenplay", "Producer", "Executive Producer"];
  const seen = new Set();
  const contributors = castData.crew
    .filter((c) => {
      if (!targetJobs.includes(c.job)) return false;
      if (seen.has(c.id)) return false;
      seen.add(c.id);
      return true;
    })
    .slice(0, 6);

  if (contributors.length === 0) return null;

  return (
    <div style={{ marginBottom: "24px" }}>
      <h4
        className="text-primary dark:text-white"
        style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 10px 0" }}
      >
        {t("detail.topContributors")}
      </h4>
      {contributors.map((c) => (
        <div key={`${c.id}-${c.job}`} style={{ marginBottom: "8px" }}>
          <p
            className="text-primary dark:text-white"
            style={{ fontSize: "13px", fontWeight: 600, margin: 0 }}
          >
            {c.name}
          </p>
          <p
            className="text-gray-500 dark:text-white/50"
            style={{ fontSize: "12px", margin: "1px 0 0 0" }}
          >
            {c.job}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function DetailSidebar({ profileData, castData, watchProviders, keywords, status, countryCode }) {
  return (
    <aside
      style={{
        width: "260px",
        flexShrink: 0,
      }}
    >
      <WatchProviders watchProviders={watchProviders} countryCode={countryCode} />
      <TopContributors castData={castData} status={status} />
      <FactsPanel profileData={profileData} status={status} />
      <Keywords keywords={keywords} status={status} />
    </aside>
  );
}
