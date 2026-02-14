"use client";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import MediaCard from "@/Components/common/MediaCard";
import Loading from "@/Components/common/Loading/Loading";

export default function FilteredGrid({
  results,
  loading,
  loadingMore,
  hasMore,
  onLoadMore,
  mediaType,
}) {
  const { t } = useTranslation();

  if (loading) {
    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "400px",
        }}
      >
        <Loading />
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "200px",
        }}
      >
        <p
          style={{ fontSize: "16px", color: "#666" }}
          className="dark:text-gray-400"
        >
          {t("filter.noResults")}
        </p>
      </div>
    );
  }

  return (
    <div style={{ flex: 1, minWidth: 0 }}>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-8 sm:gap-x-4 sm:gap-y-10">
        {results.map((item) => (
          <MediaCard
            key={item.id}
            id={item.id}
            title={item.title || item.name}
            posterPath={item.poster_path}
            rating={item.vote_average}
            date={item.release_date || item.first_air_date}
            mediaType={mediaType}
            fullWidth
          />
        ))}
      </div>

      {hasMore && (
        <div style={{ marginTop: "32px", textAlign: "center" }}>
          <button
            onClick={onLoadMore}
            disabled={loadingMore}
            style={{
              width: "100%",
              padding: "14px 0",
              fontSize: "18px",
              fontWeight: 600,
              background: "linear-gradient(to left, #D2E4C7, #92B079)",
              color: "#0A1A38",
              border: "none",
              borderRadius: "8px",
              cursor: loadingMore ? "not-allowed" : "pointer",
              opacity: loadingMore ? 0.7 : 1,
              transition: "opacity 0.3s",
            }}
            onMouseEnter={(e) => {
              if (!loadingMore)
                e.currentTarget.style.opacity = "0.85";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = loadingMore ? "0.7" : "1";
            }}
          >
            {loadingMore ? t("filter.loading") : t("filter.loadMore")}
          </button>
        </div>
      )}
    </div>
  );
}
