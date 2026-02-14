"use client";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import MovieCard from "@/Components/HomeSection/MovieCard";
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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: "30px 16px",
          padding: "0",
        }}
      >
        {results.map((item) => (
          <MovieCard
            key={item.id}
            item={item}
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
