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

  const topList = () => {
    const item = [];
    for (let i = 0; i <= 10; i++) {
      item.push(
        <div
          key={i}
          className="flex justify-center items-center min-w-[300px] h-[200px] m-1 hover:scale-105 hover:rounded-md ease-in duration-200">
          <Image
            onClick={() => router.push(`${status}/${moviesData[i]?.id}`)}
            className="rounded-xl cursor-pointer h-[175px]"
            src={`https://image.tmdb.org/t/p/w500${moviesData[i]?.backdrop_path}`}
            width={1000}
            height={1000}
            alt="image"
          />
        </div>
      );
    }
    return item;
  };
  return (
    // custom-scrollbar, global css icerisinde duzenlenmistir.
    <div>
      <div className="flex flex-col justify-start w-[1200px]">
        <p className="my-2 text-xl font-bold">
          TOP {urlStatus.toUpperCase()} {status.toUpperCase()}
        </p>
        <div className="flex justify-start items-center pb-5   how-screen overflow-x-auto custom-scrollbar">
          {topList()}
        </div>
      </div>
    </div>
  );
}
