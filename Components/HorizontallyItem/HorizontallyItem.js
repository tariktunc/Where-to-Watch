"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { fetchUrlTheMovieDb } from "@/utils/apiService";

export default function Home({ urlStatus, status }) {
  const [moviesData, setMoviesData] = useState([]);
  const router = useRouter();

  const language = useSelector((state) => state.languageSetting);
  const isLanguage = `${language.toLowerCase()}-${language}`;

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/trending/${status}/${urlStatus}?language=${isLanguage}`;

    const fetchData = async () => {
      try {
        const trendingMovies = await fetchUrlTheMovieDb(url);
        setMoviesData(trendingMovies.data.results);
      } catch (error) {
        console.error("HorizontallyItem.js => fetchData => ", error);
      }
    };
    fetchData();
  }, [isLanguage, urlStatus, status]);

  function TopList() {
    return moviesData.map((item, index) => (
      <Image
        key={index}
        onClick={() =>
          router.push(`${status === "tv" ? "tvshow" : status}/${item.id}`)
        }
        className="rounded-sm initial:w-24 md:w-52"
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        width={1000}
        height={1000}
        alt={item.title || item.name}
      />
    ));
  }

  function List() {
    return moviesData.map((item, index) => (
      <Image
        key={index}
        onClick={() =>
          router.push(`${status === "tv" ? "tvshow" : status}/${item.id}`)
        }
        className="rounded-xl cursor-pointer w-[200px] h-[200px] md:h-[300px]  m-2 scale-100 hover:scale-105 transition-all duraction-500"
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        width={1000}
        height={1000}
        alt={item.title || item.name}
      />
    ));
  }

  return (
    <div className="flex flex-wrap initial:gap-3 md:gap-5 justify-center items-center py-5">
      {<TopList />}
    </div>
  );
}
