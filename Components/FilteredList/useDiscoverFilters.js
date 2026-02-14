"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { fetchUrlTheMovieDb } from "@/utils/apiService";
import { useTranslation } from "@/hooks/useTranslation";

const DEFAULT_FILTERS = {
  sortBy: "popularity.desc",
  selectedGenres: [],
  selectedProviders: [],
  releaseDateGte: "",
  releaseDateLte: "",
  voteAverageGte: 0,
  voteAverageLte: 10,
};

function buildDiscoverUrl(status, filters, locale, page) {
  const base = "https://api.themoviedb.org/3";
  const mediaType = status === "tv" ? "tv" : "movie";
  const params = new URLSearchParams();
  params.set("language", locale);
  params.set("page", page.toString());

  // Adapt sort keys for TV vs Movie
  let sortBy = filters.sortBy;
  if (mediaType === "tv") {
    sortBy = sortBy
      .replace("primary_release_date", "first_air_date")
      .replace("title", "name");
  }
  params.set("sort_by", sortBy);

  if (filters.selectedGenres.length > 0) {
    params.set("with_genres", filters.selectedGenres.join(","));
  }

  const datePrefix =
    mediaType === "tv" ? "first_air_date" : "primary_release_date";
  if (filters.releaseDateGte) {
    params.set(`${datePrefix}.gte`, filters.releaseDateGte);
  }
  if (filters.releaseDateLte) {
    params.set(`${datePrefix}.lte`, filters.releaseDateLte);
  }

  if (filters.voteAverageGte > 0) {
    params.set("vote_average.gte", filters.voteAverageGte.toString());
  }
  if (filters.voteAverageLte < 10) {
    params.set("vote_average.lte", filters.voteAverageLte.toString());
  }

  if (filters.selectedProviders.length > 0) {
    params.set("with_watch_providers", filters.selectedProviders.join("|"));
    params.set("watch_region", filters.watchRegion || "US");
  }

  return `${base}/discover/${mediaType}?${params.toString()}`;
}

// Derive watch region from locale
function getWatchRegion(locale) {
  const regionMap = {
    "tr-TR": "TR",
    "en-US": "US",
    "de-DE": "DE",
    "es-ES": "ES",
    "fr-FR": "FR",
    "pt-BR": "BR",
    "ru-RU": "RU",
  };
  return regionMap[locale] || "US";
}

export function useDiscoverFilters(status, lists) {
  const { locale } = useTranslation();
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [genres, setGenres] = useState([]);
  const [providers, setProviders] = useState([]);
  const [filters, setFilters] = useState({ ...DEFAULT_FILTERS });
  const [appliedFilters, setAppliedFilters] = useState(null);
  const prevLocaleRef = useRef(locale);
  const watchRegion = getWatchRegion(locale);

  const hasFiltersApplied = appliedFilters !== null;

  // Check if current filters differ from what's applied (or from defaults if nothing applied)
  const isFiltersDirty = (() => {
    const compareTarget = appliedFilters || DEFAULT_FILTERS;
    if (filters.sortBy !== compareTarget.sortBy) return true;
    if (filters.releaseDateGte !== (compareTarget.releaseDateGte || "")) return true;
    if (filters.releaseDateLte !== (compareTarget.releaseDateLte || "")) return true;
    if (filters.voteAverageGte !== (compareTarget.voteAverageGte ?? 0)) return true;
    if (filters.voteAverageLte !== (compareTarget.voteAverageLte ?? 10)) return true;
    const currentGenres = [...filters.selectedGenres].sort().join(",");
    const appliedGenres = [...(compareTarget.selectedGenres || [])].sort().join(",");
    if (currentGenres !== appliedGenres) return true;
    const currentProviders = [...filters.selectedProviders].sort().join(",");
    const appliedProviders = [...(compareTarget.selectedProviders || [])].sort().join(",");
    if (currentProviders !== appliedProviders) return true;
    return false;
  })();

  // Fetch genres on mount and when locale changes
  useEffect(() => {
    const mediaType = status === "tv" ? "tv" : "movie";
    const url = `https://api.themoviedb.org/3/genre/${mediaType}/list?language=${locale}`;
    const fetchGenres = async () => {
      try {
        const response = await fetchUrlTheMovieDb(url);
        if (response.status === 200) {
          setGenres(response.data.genres || []);
        }
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };
    fetchGenres();
  }, [status, locale]);

  // Fetch watch providers on mount and when locale/region changes
  useEffect(() => {
    const mediaType = status === "tv" ? "tv" : "movie";
    const url = `https://api.themoviedb.org/3/watch/providers/${mediaType}?language=${locale}&watch_region=${watchRegion}`;
    const fetchProviders = async () => {
      try {
        const response = await fetchUrlTheMovieDb(url);
        if (response.status === 200) {
          setProviders(response.data.results || []);
        }
      } catch (error) {
        console.error("Error fetching providers:", error);
      }
    };
    fetchProviders();
  }, [status, locale, watchRegion]);

  // Reset when locale changes
  useEffect(() => {
    if (prevLocaleRef.current !== locale) {
      prevLocaleRef.current = locale;
      setResults([]);
      setPage(1);
      setLoading(true);
      if (appliedFilters) {
        setAppliedFilters({ ...appliedFilters });
      }
    }
  }, [locale]);

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      const isLoadMore = page > 1 && !loading;
      if (isLoadMore) {
        setLoadingMore(true);
      } else {
        setLoading(true);
      }

      let url;
      if (hasFiltersApplied) {
        url = buildDiscoverUrl(status, appliedFilters, locale, page);
      } else {
        url = `https://api.themoviedb.org/3/${status}/${lists}?language=${locale}&page=${page}`;
      }

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
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    };

    fetchData();
  }, [status, lists, locale, page, appliedFilters]);

  const applyFilters = useCallback(() => {
    setAppliedFilters({ ...filters, watchRegion });
    setResults([]);
    setPage(1);
    setLoading(true);
  }, [filters, watchRegion]);

  const loadMore = useCallback(() => {
    if (page < totalPages && !loadingMore) {
      setPage((p) => p + 1);
    }
  }, [page, totalPages, loadingMore]);

  const resetFilters = useCallback(() => {
    setFilters({ ...DEFAULT_FILTERS });
    setAppliedFilters(null);
    setResults([]);
    setPage(1);
    setLoading(true);
  }, []);

  return {
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
    resetFilters,
    loadMore,
    hasFiltersApplied,
    isFiltersDirty,
  };
}
