"use client";
import React, { useState, useEffect, useCallback } from "react";
import { fetchUrlTheMovieDb } from "@/utils/apiService";
import { useTranslation } from "@/hooks/useTranslation";
import PersonCard from "./PersonCard";
import Loading from "@/Components/common/Loading/Loading";

export default function PeopleListPage() {
  const { t, locale } = useTranslation();
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const isLoadMore = page > 1 && !loading;
      if (isLoadMore) {
        setLoadingMore(true);
      } else {
        setLoading(true);
      }

      const url = `https://api.themoviedb.org/3/person/popular?language=${locale}&page=${page}`;

      try {
        const response = await fetchUrlTheMovieDb(url);
        if (response.status === 200) {
          const newResults = response.data.results || [];
          setTotalPages(response.data.total_pages || 1);

          if (page === 1) {
            setResults(newResults);
          } else {
            setResults((prev) => {
              const existingIds = new Set(prev.map((r) => r.id));
              const uniqueNew = newResults.filter(
                (r) => !existingIds.has(r.id)
              );
              return [...prev, ...uniqueNew];
            });
          }
        }
      } catch (error) {
        console.error("Error fetching people:", error);
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    };

    fetchData();
  }, [locale, page]);

  const loadMore = useCallback(() => {
    if (page < totalPages && !loadingMore) {
      setPage((p) => p + 1);
    }
  }, [page, totalPages, loadingMore]);

  if (loading) {
    return (
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "30px 20px",
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
        {t("people.popularPeople")}
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: "24px 16px",
        }}
      >
        {results.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </div>

      {page < totalPages && (
        <div style={{ marginTop: "32px", textAlign: "center" }}>
          <button
            onClick={loadMore}
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
