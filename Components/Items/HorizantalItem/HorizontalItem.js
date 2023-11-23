"use client";
import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Home({ urlStatus }) {
  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState({ prev: 0, current: 5 });
  const languageSetting = useSelector(
    (state) => state.languageSetting.language
  );

  const url = urlStatus;
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/trending/movie/${url}?language=${languageSetting.toLowerCase()}-${languageSetting.toUpperCase()}`,
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY,
    },
  };

  const getTrendingMovie = async () => {
    const response = await axios.request(options);
    const data = await response.data;
    setMovies(data.results);
  };

  useEffect(() => {
    getTrendingMovie();
  }, [languageSetting]);

  const handleClick = (e) => {
    if (e.target.id === "prev") {
      if (count.prev > 0) {
        setCount({
          prev: (count.prev -= 1),
          current: (count.current -= 1),
        });
      }
    }
    if (e.target.id === "next") {
      if (count.current < movies.length) {
        setCount({
          prev: (count.prev += 1),
          current: (count.current += 1),
        });
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center my-10 px-10">
      <div className="grid grid-cols-5">
        {movies.slice(count.prev, count.current).map((movie) => (
          <div
            key={movie.id}
            className="transition-all duration-300 ease-in-out transform hover:scale-125">
            <ItemCard
              itemKey={movie.id}
              imageWidth="w-[150px]"
              url={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
              altName={movie.id}
              rating={movie.vote_average}
              titleName={movie.title === undefined ? movie.name : movie.title}
              year={
                movie.release_date === undefined
                  ? movie.first_air_date
                  : movie.release_date
              }
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          id={"prev"}
          onClick={handleClick}
          className="w-96 transition-all duration-300 ease-in-out bg-blue-500 hover:bg-blue-700 text-white font-bold mx-5  rounded">
          Prev
        </button>
        <button
          id={"next"}
          onClick={handleClick}
          className="w-96 transition-all duration-300 ease-in-out bg-blue-500 hover:bg-blue-700 text-white font-bold mx-5 rounded">
          Next
        </button>
      </div>
    </div>
  );
}
