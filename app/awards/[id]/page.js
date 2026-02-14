"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { AWARD_SHOWS } from "@/data/awardsData";
import { fetchUrlTheMovieDb } from "@/utils/apiService";
import { useTranslation } from "@/hooks/useTranslation";

function CategorySection({ category, posters }) {
  const { t } = useTranslation();

  return (
    <div style={{ marginBottom: "24px" }}>
      <h4
        className="text-primary dark:text-white"
        style={{ fontSize: "16px", fontWeight: 700, margin: "0 0 12px 0" }}
      >
        {category.name}
      </h4>

      {/* Winner */}
      <div style={{ marginBottom: "12px" }}>
        <span
          className="bg-[#FFD700]/20 text-[#B8860B] dark:text-[#FFD700]"
          style={{
            fontSize: "11px",
            fontWeight: 700,
            padding: "2px 8px",
            borderRadius: "4px",
            display: "inline-block",
            marginBottom: "8px",
          }}
        >
          {t("awards.winner")}
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {posters[category.winner.tmdbId] && (
            <Link href={`/movie/${category.winner.tmdbId}`}>
              <Image
                src={`https://image.tmdb.org/t/p/w92${posters[category.winner.tmdbId]}`}
                width={46}
                height={69}
                alt={category.winner.title}
                style={{ borderRadius: "4px", width: "46px", height: "69px", objectFit: "cover" }}
              />
            </Link>
          )}
          <div>
            <p
              className="text-primary dark:text-white"
              style={{ fontSize: "14px", fontWeight: 700, margin: 0 }}
            >
              {category.winner.title}
            </p>
            {category.winner.subtitle && (
              <p
                className="text-gray-500 dark:text-white/50"
                style={{ fontSize: "13px", margin: "2px 0 0 0" }}
              >
                {category.winner.subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Nominees */}
      {category.nominees && category.nominees.length > 0 && (
        <div>
          <span
            className="text-gray-400 dark:text-white/40"
            style={{
              fontSize: "11px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              display: "inline-block",
              marginBottom: "6px",
            }}
          >
            {t("awards.nominees")}
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {category.nominees.map((nominee, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {posters[nominee.tmdbId] && (
                  <Link href={`/movie/${nominee.tmdbId}`}>
                    <Image
                      src={`https://image.tmdb.org/t/p/w92${posters[nominee.tmdbId]}`}
                      width={32}
                      height={48}
                      alt={nominee.title}
                      style={{ borderRadius: "3px", width: "32px", height: "48px", objectFit: "cover" }}
                    />
                  </Link>
                )}
                <div>
                  <p
                    className="text-primary dark:text-white/80"
                    style={{ fontSize: "13px", fontWeight: 600, margin: 0 }}
                  >
                    {nominee.title}
                  </p>
                  {nominee.subtitle && (
                    <p
                      className="text-gray-400 dark:text-white/40"
                      style={{ fontSize: "12px", margin: 0 }}
                    >
                      {nominee.subtitle}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function AwardDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { t, locale } = useTranslation();
  const [activeYear, setActiveYear] = useState(null);
  const [posters, setPosters] = useState({});

  const show = AWARD_SHOWS.find((s) => s.id === params.id);

  useEffect(() => {
    if (!show || show.editions.length === 0) return;
    setActiveYear(show.editions[0].year);
  }, [show]);

  // Fetch posters for active year's movies
  useEffect(() => {
    if (!show || !activeYear) return;

    const edition = show.editions.find((e) => e.year === activeYear);
    if (!edition) return;

    const tmdbIds = new Set();
    edition.categories.forEach((cat) => {
      if (cat.winner?.tmdbId) tmdbIds.add(cat.winner.tmdbId);
      cat.nominees?.forEach((n) => {
        if (n.tmdbId) tmdbIds.add(n.tmdbId);
      });
    });

    const fetchPosters = async () => {
      const newPosters = { ...posters };
      const idsToFetch = [...tmdbIds].filter((id) => !newPosters[id]);

      if (idsToFetch.length === 0) return;

      await Promise.all(
        idsToFetch.map(async (id) => {
          try {
            const res = await fetchUrlTheMovieDb(
              `https://api.themoviedb.org/3/movie/${id}?language=${locale}`
            );
            if (res?.data?.poster_path) {
              newPosters[id] = res.data.poster_path;
            }
          } catch {
            // skip
          }
        })
      );
      setPosters(newPosters);
    };

    fetchPosters();
  }, [activeYear, locale, show]);

  if (!show) {
    return (
      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 32px", textAlign: "center" }}>
        <h1 className="text-primary dark:text-white" style={{ fontSize: "24px", fontWeight: 700 }}>
          Award show not found
        </h1>
        <Link href="/awards" className="text-primary dark:text-accent" style={{ fontSize: "14px" }}>
          ← {t("awards.backToAwards")}
        </Link>
      </main>
    );
  }

  if (show.editions.length === 0) {
    return (
      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 32px", minHeight: "60vh" }}>
        <Link
          href="/awards"
          className="text-primary dark:text-accent"
          style={{ fontSize: "14px", textDecoration: "none", display: "inline-block", marginBottom: "20px" }}
        >
          ← {t("awards.backToAwards")}
        </Link>
        <h1 className="text-primary dark:text-white" style={{ fontSize: "28px", fontWeight: 700, margin: "0 0 12px 0" }}>
          {show.name}
        </h1>
        <p className="text-gray-500 dark:text-white/50" style={{ fontSize: "15px" }}>
          {show.description}
        </p>
        <p className="text-gray-400 dark:text-white/40" style={{ fontSize: "14px", marginTop: "20px" }}>
          {t("awards.detailedDataComingSoon")}
        </p>
      </main>
    );
  }

  const activeEdition = show.editions.find((e) => e.year === activeYear);

  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 32px", minHeight: "60vh" }}>
      <Link
        href="/awards"
        className="text-primary dark:text-accent"
        style={{ fontSize: "14px", textDecoration: "none", display: "inline-block", marginBottom: "20px" }}
      >
        ← {t("awards.backToAwards")}
      </Link>

      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #0A1A38, #1a3a6e)",
          borderRadius: "12px",
          padding: "32px 40px",
          marginBottom: "24px",
        }}
      >
        <h1 style={{ fontSize: "32px", fontWeight: 700, color: "white", margin: 0 }}>
          {show.name}
        </h1>
        <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", marginTop: "8px", marginBottom: 0 }}>
          {show.description}
        </p>
      </div>

      {/* Year tabs */}
      <div
        className="custom-scrollbar"
        style={{
          display: "flex",
          gap: "6px",
          overflowX: "auto",
          paddingBottom: "12px",
          marginBottom: "24px",
        }}
      >
        {show.editions.map((edition) => (
          <button
            key={edition.year}
            onClick={() => setActiveYear(edition.year)}
            className={
              activeYear === edition.year
                ? "bg-primary dark:bg-white/15 text-white"
                : "bg-gray-100 dark:bg-white/5 text-primary dark:text-white/70 hover:bg-gray-200 dark:hover:bg-white/10"
            }
            style={{
              padding: "8px 20px",
              fontSize: "14px",
              fontWeight: 600,
              border: "none",
              borderRadius: "20px",
              cursor: "pointer",
              transition: "all 0.2s",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            {edition.year}
          </button>
        ))}
      </div>

      {/* Active edition */}
      {activeEdition && (
        <div>
          <h2
            className="text-primary dark:text-white"
            style={{ fontSize: "20px", fontWeight: 700, margin: "0 0 6px 0" }}
          >
            {activeEdition.ceremony}
          </h2>
          <p
            className="text-gray-400 dark:text-white/40"
            style={{ fontSize: "14px", margin: "0 0 24px 0" }}
          >
            {activeEdition.date}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "24px",
            }}
          >
            {activeEdition.categories.map((category, i) => (
              <div
                key={i}
                className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-[#333]"
                style={{ borderRadius: "10px", padding: "20px" }}
              >
                <CategorySection category={category} posters={posters} />
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
