"use client";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import FilterPanel from "./FilterPanel";
import SortByFilter from "./SortByFilter";
import GenreFilter from "./GenreFilter";
import ReleaseDateFilter from "./ReleaseDateFilter";
import RatingFilter from "./RatingFilter";
import PlatformFilter from "./PlatformFilter";

export default function FilterSidebar({
  filters,
  setFilters,
  genres,
  providers,
  onApply,
  isOpen,
  onClose,
  isMobile,
  mediaType,
}) {
  const { t } = useTranslation();

  const handleGenreToggle = (genreId) => {
    setFilters((prev) => ({
      ...prev,
      selectedGenres: prev.selectedGenres.includes(genreId)
        ? prev.selectedGenres.filter((id) => id !== genreId)
        : [...prev.selectedGenres, genreId],
    }));
  };

  const handleProviderToggle = (providerId) => {
    setFilters((prev) => ({
      ...prev,
      selectedProviders: prev.selectedProviders.includes(providerId)
        ? prev.selectedProviders.filter((id) => id !== providerId)
        : [...prev.selectedProviders, providerId],
    }));
  };

  const releaseDateTitle =
    mediaType === "tv" ? t("filter.firstAirDate") : t("filter.releaseDate");

  const sidebarContent = (
    <div
      style={{
        width: isMobile ? "100%" : "260px",
        flexShrink: 0,
      }}
    >
      <FilterPanel title={t("filter.sortBy")} defaultOpen={true}>
        <SortByFilter
          value={filters.sortBy}
          onChange={(val) => setFilters((prev) => ({ ...prev, sortBy: val }))}
        />
      </FilterPanel>

      <FilterPanel title={t("filter.genres")} defaultOpen={true}>
        <GenreFilter
          genres={genres}
          selectedGenres={filters.selectedGenres}
          onToggle={handleGenreToggle}
        />
      </FilterPanel>

      {providers.length > 0 && (
        <FilterPanel title={t("filter.platforms")} defaultOpen={false}>
          <PlatformFilter
            providers={providers}
            selectedProviders={filters.selectedProviders}
            onToggle={handleProviderToggle}
          />
        </FilterPanel>
      )}

      <FilterPanel title={releaseDateTitle} defaultOpen={false}>
        <ReleaseDateFilter
          dateGte={filters.releaseDateGte}
          dateLte={filters.releaseDateLte}
          onChangeGte={(val) =>
            setFilters((prev) => ({ ...prev, releaseDateGte: val }))
          }
          onChangeLte={(val) =>
            setFilters((prev) => ({ ...prev, releaseDateLte: val }))
          }
        />
      </FilterPanel>

      <FilterPanel title={t("filter.userRating")} defaultOpen={false}>
        <RatingFilter
          minRating={filters.voteAverageGte}
          maxRating={filters.voteAverageLte}
          onChangeMin={(val) =>
            setFilters((prev) => ({ ...prev, voteAverageGte: val }))
          }
          onChangeMax={(val) =>
            setFilters((prev) => ({ ...prev, voteAverageLte: val }))
          }
        />
      </FilterPanel>

      {/* Search button only in mobile overlay */}
      {isMobile && (
        <button
          onClick={() => {
            onApply();
            if (onClose) onClose();
          }}
          style={{
            width: "100%",
            padding: "12px 0",
            fontSize: "16px",
            fontWeight: 600,
            background: "linear-gradient(to left, #D2E4C7, #92B079)",
            color: "#0A1A38",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer",
            marginTop: "8px",
            transition: "opacity 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          {t("filter.search")}
        </button>
      )}
    </div>
  );

  // Mobile overlay mode
  if (isMobile) {
    if (!isOpen) return null;
    return (
      <>
        {/* Overlay backdrop */}
        <div
          onClick={onClose}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1000,
          }}
        />
        {/* Sidebar panel */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "85vw",
            maxWidth: "320px",
            height: "100vh",
            backgroundColor: "#f8f8f8",
            zIndex: 1001,
            overflowY: "auto",
            padding: "16px",
            boxShadow: "4px 0 12px rgba(0,0,0,0.2)",
          }}
          className="dark:!bg-primary"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <h2
              style={{ margin: 0, fontSize: "20px", fontWeight: 700 }}
              className="dark:text-white"
            >
              {t("filter.filters")}
            </h2>
            <button
              onClick={onClose}
              style={{
                background: "none",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
                padding: "4px",
                lineHeight: 1,
              }}
              className="dark:text-white"
            >
              ✕
            </button>
          </div>
          {sidebarContent}
        </div>
      </>
    );
  }

  // Desktop mode
  return (
    <div
      style={{
        position: "sticky",
        top: "80px",
        alignSelf: "flex-start",
      }}
    >
      {sidebarContent}
    </div>
  );
}
