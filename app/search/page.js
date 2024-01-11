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
      collection: `https://api.themoviedb.org/3/search/collection?query=${query}&language=${isLanguage}&page=1`,
      movie: `https://api.themoviedb.org/3/search/movie?query=${query}&language=${isLanguage}&page=1`,
      tv: `https://api.themoviedb.org/3/search/tv?query=${query}&language=${isLanguage}&page=1`,
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

  // gelen istekler wheretowatch gibi da olduug listelenecek ve hangi seççenek seçildi ise o seçenek ekranda gösterilecektir. buna göre çalışma yapılacaktır.e
  return (
    <section className="flex flex-col justify-center items-center m-2">
      {loading ? (
        <>
          <Loading />
          <Loading />
          <Loading />
          <Loading />
        </>
      ) : (
        <div className="flex flex-col justify-center items-center">
          {results.length === 0 && <h1>There is no result</h1>}
          {results.map((result) => (
            <Card
              key={result.id}
              title={result.name || result.title}
              overview={result.overview}
              src={result.poster_path || result.profile_path}
            />
          ))}
        </div>
      )}
    </section>
  );
}
