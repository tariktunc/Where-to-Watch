"use client";
import React, { useState, useEffect } from "react";
import VerticalItem from "@/Components/VerticalItem/VerticalItem";
import WhereToWatch from "@/Components/WhereToWatch/WhereToWatch";
import { fetchUrlTheMovieDb } from "@/utils/apiService";
import { useSelector } from "react-redux";

export default function Home({ params }) {
  const language = useSelector((state) => state.languageSetting);
  const isLanguage = `${language.toLowerCase()}-${language}`;
  const [movies, setMovies] = useState([]);
  const imageUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`;
    const fetchData = async () => {
      try {
        const trendingMovies = await fetchUrlTheMovieDb(url);
        setMovies(trendingMovies.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [isLanguage]);
  return (
    <div className="flex justify-center">
      <WhereToWatch />
      <VerticalItem />
    </div>
  );
}
