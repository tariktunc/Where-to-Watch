"use client";
import Image from "next/image";
import styles from "./style.module.css";
import { fetchUrlTheMovieDb } from "@/utils/apiService";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";

export default function Home({ params }) {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const router = useRouter();
  const language = useSelector((state) => state.languageSetting);
  console.log(language);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  const fetchData = async (query) => {
    const url = `https://api.themoviedb.org/3/search/collection?query=${query}&language=${language.toLowerCase()}-${language}&page=1`;
    console.log(url);
    try {
      const discoverSearch = await fetchUrlTheMovieDb(url);
      setResults(discoverSearch.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Veri yüklenirken bir hata oluştu.", error);
    }
  };

  useEffect(() => {
    fetchData(query);
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
  return (
    <>
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
    </>
  );
}
