"use client";
import { Suspense } from "react";
import { fetchUrlTheMovieDb } from "@/utils/apiService";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Card from "./Components/Card";
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
      console.error("Error while fetching data: ", error);
      return [];
    }
  };

  useEffect(() => {
    const urls = {
      movie: `https://api.themoviedb.org/3/search/movie?query=${query}&language=${locale}&page=1`,
      tv: `https://api.themoviedb.org/3/search/tv?query=${query}&language=${locale}&page=1`,
      collection: `https://api.themoviedb.org/3/search/collection?query=${query}&language=${locale}&page=1`,
      person: `https://api.themoviedb.org/3/search/person?query=${query}&language=${locale}&page=1`,
    };

    const fetchAllData = async () => {
      const data = await Promise.all(
        Object.entries(urls).map(([type, url]) => fetchData(url, type))
      );
      setResults(data.flat());
      setLoading(false);
    };

    fetchAllData();
  }, [query, locale]);

  return (
    <section className="max-w-screen-xl flex flex-col gap-5 mx-auto">
      <DiscoverSection />
      <div className="flex flex-wrap justify-center gap-5">
        {loading ? (
          <Loading />
        ) : (
          <>
            {results.length === 0 && (
              <div className="dark:text-white">
                <p className="text-sm md:text-lg">
                  {t("search.noResults")}
                </p>
                <Link className="text-blue-500 text-md md:text-2xl" href="/">
                  {t("search.home")}
                </Link>
              </div>
            )}
          </>
        )}
        {results.map((result) => (
          <Card
            key={result.id}
            title={result.name || result.title}
            overview={result.overview}
            src={result.poster_path || result.profile_path || null}
            link={
              result.type === "movie"
                ? `/movie/${result.id}`
                : result.type === "tv"
                ? `/tvshow/${result.id}`
                : `/person/${result.id}`
            }
          />
        ))}
      </div>
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
