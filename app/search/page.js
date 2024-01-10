"use client";
import Image from "next/image";
import styles from "./style.module.css";
import { fetchUrlTheMovieDb } from "@/utils/apiService";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";

export default function Home({ params }) {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const language = useSelector((state) => state.languageSetting);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const isLanguage = `${language.toLowerCase()}-${language}`;

  const collection = `https://api.themoviedb.org/3/search/collection?query=${query}&language=${isLanguage}&page=1`;
  const movie = `https://api.themoviedb.org/3/search/movie?query=${query}&language=${isLanguage}&page=1`;
  const tv = `https://api.themoviedb.org/3/search/tv?query=${query}&language=${isLanguage}&page=1`;
  const person = `https://api.themoviedb.org/3/search/person?query=${query}&language=${isLanguage}&page=1`;

  useEffect(() => {
    const collectionData = async () => {
      try {
        const data = await fetchUrlTheMovieDb(collection);
        if (data.status === 200) {
          setResults(data.data.results);
        }
      } catch (error) {
        console.error("Veri yüklenirken bir hata oluştu.", error);
      }
    };
    const movieData = async () => {
      try {
        const data = await fetchUrlTheMovieDb(movie);
        if (data.status === 200) {
          setResults(data.data.results);
        }
      } catch (error) {
        console.error("Veri yüklenirken bir hata oluştu.", error);
      }
    };

    const tvData = async () => {
      try {
        const data = await fetchUrlTheMovieDb(tv);
        if (data.status === 200) {
          setResults(data.data.results);
        }
      } catch (error) {
        console.error("Veri yüklenirken bir hata oluştu.", error);
      }
    };

    const personData = async () => {
      try {
        const data = await fetchUrlTheMovieDb(person);
        if (data.status === 200) {
          setResults(data.data.results);
        }
      } catch (error) {}
    };

    const fetchDataAsync = async () => {
      await Promise.all([
        collectionData(),
        movieData(),
        tvData(),
        personData(),
      ]);
      setLoading(false);
    };

    fetchDataAsync();
  }, [query, language]);
  function Card(props) {
    return (
      <div className="flex m-2 min-w-[500px] max-w-[800px] h-full rounded-md shadow-md ">
        <div className="h-[141px] min-w-[94px] w-[94px]">
          <Image
            className="rounded-l-md cursor-pointer "
            width={100}
            height={100}
            alt="alt"
            src={
              props.src !== null
                ? `${"https://www.themoviedb.org/t/p/w94_and_h141_bestv2/"}${
                    props.src
                  }`
                : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
            }
          />
        </div>
        <div className={`w-[500px] px-2 py-4 ${styles.customMaxWidth}`}>
          <h2 className="font-bold">{props.title}</h2>
          <p className="opacity-50">{props.id}</p>
          <p className="text-sm">{props.overview}</p>
        </div>
      </div>
    );
  }

  // gelen istekler wheretowatch gibi da olduug listelenecek ve hangi seççenek seçildi ise o seçenek ekranda gösterilecektir. buna göre çalışma yapılacaktır.
  return (
    <section className="flex flex-col justify-center items-center m-2">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center">
            {results.map((result) => (
              <Card
                key={result.id}
                title={result.name}
                id={result.id}
                overview={result.overview}
                src={result.poster_path}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
