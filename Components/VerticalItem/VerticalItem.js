"use client";
import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Home({ urlStatus }) {
  const languageSetting = useSelector(
    (state) => state.languagesSetting.language
  );
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = urlStatus;
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/trending/movie/${url}?language=${languageSetting.toLowerCase()}-${languageSetting.toUpperCase()}`,
      headers: {
        accept: "application/json",
        Authorization: process.env.API_KEY,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setMovies(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [languageSetting, urlStatus]);

  return (
    <div className="flex flex-wrap max-w-screen-lg ">
      {movies.map((movie) => (
        <div key={movie.id}>
          <ItemCard
            itemKey={movie.id}
            imageWidth="w-[170px]"
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
  );
}
