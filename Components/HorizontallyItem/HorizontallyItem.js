"use client";
import React, { useState, useEffect } from "react";
import { fetchUrlTheMovieDb } from "@/utils/apiService";
import { useTranslation } from "@/hooks/useTranslation";
import MediaCard from "@/Components/common/MediaCard";

export default function Home({ urlStatus, status }) {
  const [moviesData, setMoviesData] = useState([]);
  const { locale } = useTranslation();

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/trending/${status}/${urlStatus}?language=${locale}`;

    const fetchData = async () => {
      try {
        const trendingMovies = await fetchUrlTheMovieDb(url);
        setMoviesData(trendingMovies.data.results);
      } catch (error) {
        // silently handled
      }
    };
    fetchData();
  }, [locale, urlStatus, status]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-8 sm:gap-x-4 sm:gap-y-10 py-5 px-2">
      {moviesData.map((item, index) => (
        <MediaCard
          key={item.id || index}
          id={item.id}
          title={item.title || item.name}
          posterPath={item.poster_path}
          rating={item.vote_average}
          date={item.release_date || item.first_air_date}
          mediaType={status === "tv" ? "tv" : status}
          fullWidth
        />
      ))}
    </div>
  );
}
