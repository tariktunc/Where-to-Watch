"use client";
import { Suspense } from "react";
import { fetchUrlTheMovieDb } from "@/utils/apiService";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import MediaCard from "@/Components/common/MediaCard";
import { useTranslation } from "@/hooks/useTranslation";
import Loading from "./Components/Loading";
import Link from "next/link";
import DiscoverSection from "@/Components/DiscoverSection/DiscoverSection";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const { locale, t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  const fetchData = async (url, type) => {
    try {
      const response = await fetchUrlTheMovieDb(url);
      if (response.status === 200) {
        return response.data.results.map((result) => ({ ...result, type }));
      }
    } catch (error) {
      return [];
    }
  };

  useEffect(() => {
    if (!query) {
      setLoading(false);
      setResults([]);
      return;
    }

    const urls = {
      movie: `https://api.themoviedb.org/3/search/movie?query=${query}&language=${locale}&page=1`,
      tv: `https://api.themoviedb.org/3/search/tv?query=${query}&language=${locale}&page=1`,
      collection: `https://api.themoviedb.org/3/search/collection?query=${query}&language=${locale}&page=1`,
      person: `https://api.themoviedb.org/3/search/person?query=${query}&language=${locale}&page=1`,
    };

    const fetchAllData = async () => {
      setLoading(true);
      const data = await Promise.all(
        Object.entries(urls).map(([type, url]) => fetchData(url, type))
      );
      const flatResults = data.flat().filter(Boolean);
      flatResults.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
      setResults(flatResults);
      setLoading(false);
    };

    fetchAllData();
  }, [query, locale]);

  return (
    <section className="max-w-screen-xl flex flex-col gap-5 mx-auto">
      <DiscoverSection />

      {loading ? (
        <div className="flex flex-wrap justify-center gap-5 px-4">
          <Loading />
        </div>
      ) : results.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16">
          <p className="text-gray-500 dark:text-white/60 text-lg">
            {query ? t("search.noResults") : t("search.startSearching")}
          </p>
          {query && (
            <Link className="text-blue-500 text-md mt-4" href="/">
              {t("search.home")}
            </Link>
          )}
        </div>
      ) : (
        <>
          <p className="text-gray-500 dark:text-white/60 text-sm px-4">
            {results.length} {t("search.resultsFound")}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-8 sm:gap-x-4 sm:gap-y-10 px-4 pb-8">
            {results.map((result) => (
              <MediaCard
                key={`${result.type}-${result.id}`}
                id={result.id}
                title={result.name || result.title}
                posterPath={result.poster_path || result.profile_path}
                rating={result.vote_average}
                date={result.release_date || result.first_air_date}
                mediaType={result.type}
                showTypeBadge
                department={result.known_for_department}
                fullWidth
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <SearchContent />
    </Suspense>
  );
}
