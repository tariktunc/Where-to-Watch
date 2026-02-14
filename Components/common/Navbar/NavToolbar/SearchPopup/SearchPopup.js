"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { fetchUrlTheMovieDb } from "@/utils/apiService";
import { useTranslation } from "@/hooks/useTranslation";
import { useDebounce } from "@/hooks/useDebounce";
import SearchResultItem from "./SearchResultItem";

export default function SearchPopup({ isOpen, onClose }) {
  const { t, locale } = useTranslation();
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const debouncedQuery = useDebounce(query, 300);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
    if (!isOpen) {
      setQuery("");
      setResults([]);
    }
  }, [isOpen]);

  // Fetch results on debounced query change
  useEffect(() => {
    if (!debouncedQuery || debouncedQuery.length < 2) {
      setResults([]);
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    const fetchResults = async () => {
      setLoading(true);
      try {
        const url = `https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(debouncedQuery)}&language=${locale}&page=1&include_adult=false`;
        const response = await fetchUrlTheMovieDb(url, {
          signal: controller.signal,
        });
        if (response) {
          const filtered = (response.data.results || [])
            .filter((r) => ["movie", "tv", "person"].includes(r.media_type))
            .slice(0, 8);
          setResults(filtered);
        }
      } catch (error) {
        // Silently handle abort errors
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
    return () => controller.abort();
  }, [debouncedQuery, locale]);

  // Outside click
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, onClose]);

  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" && query.trim()) {
        router.push(`/search?query=${encodeURIComponent(query.trim())}`);
        onClose();
      }
    },
    [query, router, onClose]
  );

  const showDropdown =
    isOpen && query.length >= 2 && (results.length > 0 || loading);
  const showNoResults =
    isOpen &&
    query.length >= 2 &&
    !loading &&
    results.length === 0 &&
    debouncedQuery.length >= 2;

  return (
    <div ref={containerRef}>
      {/* Expanding input */}
      <div
        style={{
          position: "absolute",
          right: "40px",
          top: "50%",
          transform: "translateY(-50%)",
          width: isOpen ? "min(400px, calc(100vw - 100px))" : "0px",
          opacity: isOpen ? 1 : 0,
          overflow: "hidden",
          transition:
            "width 0.25s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease",
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t("search.searchPlaceholder")}
          className="bg-white dark:bg-surface-dark text-[#333] dark:text-[#f0f0f0] border border-[#ddd] dark:border-[#444]"
          style={{
            width: "100%",
            padding: "8px 16px",
            fontSize: "14px",
            borderRadius: "20px",
            outline: "none",
            transition: "border-color 0.2s",
          }}
        />
      </div>

      {/* Results dropdown */}
      <div
        className="bg-white dark:bg-surface-dark"
        style={{
          position: "absolute",
          top: "calc(100% + 12px)",
          right: 0,
          width: "min(420px, calc(100vw - 40px))",
          borderRadius: "8px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          opacity: showDropdown || showNoResults ? 1 : 0,
          visibility: showDropdown || showNoResults ? "visible" : "hidden",
          transform:
            showDropdown || showNoResults
              ? "translateY(0)"
              : "translateY(-4px)",
          transition: "all 0.15s ease",
          maxHeight: "70vh",
          overflowY: "auto",
          zIndex: 50,
        }}
      >
        {/* Loading */}
        {loading && (
          <div
            className="text-[#888] dark:text-[#aaa]"
            style={{
              padding: "16px",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            {t("search.searching")}
          </div>
        )}

        {/* Results */}
        {!loading &&
          results.map((result) => (
            <SearchResultItem
              key={`${result.media_type}-${result.id}`}
              result={result}
              onClose={onClose}
            />
          ))}

        {/* See all results */}
        {!loading && results.length > 0 && (
          <Link
            href={`/search?query=${encodeURIComponent(query)}`}
            onClick={onClose}
            className="text-primary dark:text-accent border-t border-[#eee] dark:border-[#333] hover:bg-[#f5f5f5] dark:hover:bg-surface-dark-hover"
            style={{
              display: "block",
              textAlign: "center",
              padding: "12px",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
              transition: "background-color 0.1s",
            }}
          >
            {t("search.seeAllResults")}
          </Link>
        )}

        {/* No results */}
        {showNoResults && (
          <div
            className="text-[#888] dark:text-[#aaa]"
            style={{
              padding: "20px",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            {t("search.noResults")}
          </div>
        )}
      </div>
    </div>
  );
}
