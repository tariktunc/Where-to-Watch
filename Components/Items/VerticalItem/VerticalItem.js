"use client";
import React, { useState, useEffect } from "react";
import Rating from "@/Components/Assets/Rating/rating";
import Item from "@/Components/Items/Item/Item";
import { fetchUrlTheMovieDb } from "@/utils/apiService";
import { useSelector } from "react-redux";
export default function Home({ urlStatus, status }) {
  const languageLoCase = useSelector(
    (state) => state.languageSetting.languageLoCase
  );
  const languageUpCase = useSelector(
    (state) => state.languageSetting.languageUpCase
  );

  const [movies, setMovies] = useState([]);
  const imageUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/trending/${status}/${urlStatus}?language=${languageLoCase}-${languageUpCase}`;
    const fetchData = async () => {
      try {
        const trendingMovies = await fetchUrlTheMovieDb(url);
        setMovies(trendingMovies.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [languageLoCase, languageUpCase, urlStatus, status]);

  return (
    <div className="flex flex-wrap max-w-screen-lg rounded-xl">
      {movies.map((movie) => (
        <div key={movie.id}>
          <Item
            urlStatus={status}
            url={imageUrl + movie.poster_path}
            altName={movie.id}
            itemKey={movie.id}
            imageWidth="w-[170px]">
            <div className={`p-2 h-[120px]`}>
              <Rating w={"w-5"} h={"h-5"} rating={movie.vote_average} />
              <p className={`text-sm pt-2 font-bold`}>
                {movie.title === undefined ? movie.name : movie.title}
              </p>
              <p className={`text-sm pt-2 opacity-70`}>
                {movie.release_date === undefined
                  ? movie.first_air_date
                  : movie.release_date}
              </p>
            </div>
          </Item>
        </div>
      ))}
    </div>
  );
}
