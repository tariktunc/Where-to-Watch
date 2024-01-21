"use client";
import { fetchUrlTheMovieDb } from "@/utils/apiService";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import Card from "./Components/Card";
import Loading from "./Components/Loading";
import Link from "next/link";

export default function Home({ params }) {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const language = useSelector((state) => state.languageSetting);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  console.log(results);
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
    const isLanguage = `${language.toLowerCase()}-${language}`;
    const urls = {
      movie: `https://api.themoviedb.org/3/search/movie?query=${query}&language=${isLanguage}&page=1`,
      tv: `https://api.themoviedb.org/3/search/tv?query=${query}&language=${isLanguage}&page=1`,
      collection: `https://api.themoviedb.org/3/search/collection?query=${query}&language=${isLanguage}&page=1`,
      person: `https://api.themoviedb.org/3/search/person?query=${query}&language=${isLanguage}&page=1`,
    };

    const fetchAllData = async () => {
      const data = await Promise.all(
        Object.entries(urls).map(([type, url]) => fetchData(url, type))
      );
      setResults(data.flat());
      setLoading(false);
    };

    fetchAllData();
  }, [query, language]);

  return (
    <section className="max-w-screen-xl  items-center justify-center mx-auto p-4 dark:bg-gray-900 ">
      <div className="flex flex-wrap justify-center">
        {loading && <Loading />}
        {!loading && (
          <>
            {results.length === 0 && (
              <div className="dark:text-white">
                <p className="text-sm md:text-lg">The searched word was not found.</p>
                <Link className="text-blue-500 text-md md:text-2xl" href="/">
                  Home
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
