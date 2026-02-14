"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { useDiscoverFilters } from "./useDiscoverFilters";
import FilterSidebar from "./FilterSidebar";
import FilteredGrid from "./FilteredGrid";
import MobileFilterToggle from "./MobileFilterToggle";

const PAGE_TITLES = {
  movie: {
    popular: "filter.popularMovies",
    now_playing: "filter.nowPlayingMovies",
    upcoming: "filter.upcomingMovies",
    top_rated: "filter.topRatedMovies",
  },
  tv: {
    popular: "filter.popularTvShows",
    airing_today: "filter.airingTodayTvShows",
    on_the_air: "filter.onTheAirTvShows",
    top_rated: "filter.topRatedTvShows",
  },
};

export default function FilteredListPage({ status, lists }) {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const {
    results,
    loading,
    loadingMore,
    genres,
    providers,
    watchRegion,
    filters,
    totalPages,
    page,
    setFilters,
    applyFilters,
    loadMore,
    hasFiltersApplied,
    isFiltersDirty,
  } = useDiscoverFilters(status, lists);

  useEffect(() => {
    setMounted(true);
    const checkWidth = () => setIsMobile(window.innerWidth <= 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const mediaType = status === "tv" ? "tv" : "movie";
  const titleKey = PAGE_TITLES[mediaType]?.[lists] || "filter.popularMovies";

  if (!mounted) return null;

  return (
    <div
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "30px 20px",
      }}
    >
      <h2
        style={{
          fontSize: "26px",
          fontWeight: 600,
          marginBottom: "24px",
        }}
        className="dark:text-white"
      >
        {t(titleKey)}
      </h2>

      <div
        style={{
          display: "flex",
          gap: "24px",
          alignItems: "flex-start",
        }}
      >
        {/* Desktop sidebar */}
        {!isMobile && (
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            genres={genres}
            providers={providers}
            onApply={applyFilters}
            isOpen={true}
            onClose={() => {}}
            isMobile={false}
            mediaType={mediaType}
          />
        )}

        {/* Main grid */}
        <FilteredGrid
          results={results}
          loading={loading}
          loadingMore={loadingMore}
          hasMore={page < totalPages}
          onLoadMore={loadMore}
          mediaType={mediaType}
        />
      </div>

      {/* Mobile sidebar overlay */}
      {isMobile && (
        <>
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            genres={genres}
            providers={providers}
            onApply={applyFilters}
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            isMobile={true}
            mediaType={mediaType}
          />
          <MobileFilterToggle onClick={() => setSidebarOpen(true)} />
        </>
      )}

      {/* Sticky search bar - appears when filters are changed */}
      {isFiltersDirty && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 998,
            padding: "12px 20px",
            background: "linear-gradient(to top, rgba(10,26,56,0.98), rgba(10,26,56,0.92))",
            backdropFilter: "blur(8px)",
            boxShadow: "0 -4px 20px rgba(0,0,0,0.3)",
          }}
        >
          <div
            style={{
              maxWidth: "1400px",
              margin: "0 auto",
            }}
          >
            <button
              onClick={applyFilters}
              style={{
                width: "100%",
                padding: "14px 0",
                fontSize: "17px",
                fontWeight: 700,
                background: "linear-gradient(to left, #D2E4C7, #92B079)",
                color: "#0A1A38",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "opacity 0.3s",
                letterSpacing: "0.5px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {t("filter.search")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
