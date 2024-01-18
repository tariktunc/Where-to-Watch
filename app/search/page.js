"use client";
import { fetchUrlTheMovieDb } from "@/utils/apiService";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import Card from "./Components/Card";
import Loading from "./Components/Loading";

export default function Home({ params }) {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const language = useSelector((state) => state.languageSetting);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  console.log(results);
  const fetchData = async (url) => {
    try {
      const response = await fetchUrlTheMovieDb(url);
      if (response.status === 200) {
        return response.data.results;
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
        Object.values(urls).map((url) => fetchData(url))
      );
      setResults(data.flat());
      setLoading(false);
    };

    fetchAllData();
  }, [query, language]);

  return (
    <section className="max-w-screen-xl  items-center justify-center mx-auto p-4 dark:bg-gray-900 ">
      <div className="flex flex-wrap justify-center">
        {results.map((result) => (
          <Card
            key={result.id}
            title={result.name || result.title}
            overview={result.overview}
            src={result.poster_path || result.profile_path || null}
          />
        ))}
      </div>
    </section>
  );
}
