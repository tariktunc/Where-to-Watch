"use client";
import React, { useState, useEffect } from "react";
import Rating from "@/Components/Assets/Rating/rating";
import Item from "@/Components/Items/Item/Item";
import { useSelector } from "react-redux";
import { fetchUrlTheMovieDb } from "@/utils/apiService";

export default function Home({ urlStatus, status }) {
  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState({ prev: 0, current: 5 });
  const languageLoCase = useSelector(
    (state) => state.languageSetting.languageLoCase
  );
  const languageUpCase = useSelector(
    (state) => state.languageSetting.languageUpCase
  );

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/trending/${status}/${urlStatus}?language=${languageLoCase}-${languageUpCase}`;
    const fetchData = async () => {
      try {
        const trendingMovies = await fetchUrlTheMovieDb(url);
        setMovies(trendingMovies);
      } catch (error) {
        console.error("HorizantalItem => fetchData => ", error);
      }
    };

    fetchData();
  }, [languageLoCase, languageUpCase, urlStatus, status]);

  const handleClick = (e) => {
    if (e.target.id === "prev" && count.prev > 0) {
      setCount((prevCount) => ({
        ...prevCount,
        prev: prevCount.prev - 1,
        current: prevCount.current - 1,
      }));
    }
    if (e.target.id === "next" && count.current < movies.length) {
      setCount((prevCount) => ({
        ...prevCount,
        prev: prevCount.prev + 1,
        current: prevCount.current + 1,
      }));
    }
  };

  const renderMovies = (movies) => {
    return movies.slice(count.prev, count.current).map((movie) => (
      <div
        key={movie.id}
        className="transition-all duration-300 ease-in-out transform hover:scale-125">
        <Item
          urlStatus={status}
          url={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          itemKey={movie.id}
          imageWidth="w-[150px]"
          altName={movie.id}>
          <div className={`p-2 h-[120px]`}>
            <Rating rating={movie.vote_average} />
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
    ));
  };

  return (
    <div className="flex flex-col justify-center items-center my-10 px-10">
      <div className="grid grid-cols-5">{renderMovies(movies)}</div>
      <div className="flex justify-center">
        <button
          id="prev"
          onClick={handleClick}
          className="w-96 transition-all duration-300 ease-in-out bg-blue-500 hover:bg-blue-700 text-white font-bold mx-5  rounded">
          Prev
        </button>
        <button
          id="next"
          onClick={handleClick}
          className="w-96 transition-all duration-300 ease-in-out bg-blue-500 hover:bg-blue-700 text-white font-bold mx-5 rounded">
          Next
        </button>
      </div>
    </div>
  );
}
