// Popular Page istegi components donusturulecek.
"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Item from "@/Components/Items/Item/Item";
import Rating from "@/Components/Assets/Rating/rating";
import { fetchUrlTheMovieDb } from "@/utils/apiService";

export default function Popular({ status }) {
  const [data, setData] = useState([]);
  console.log(data);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const languageLoCase = useSelector(
    (state) => state.languageSetting.languageLoCase
  );
  const languageUpCase = useSelector(
    (state) => state.languageSetting.languageUpCase
  );

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/popular?language=${languageLoCase}-${languageUpCase}&page=${page}`;
    const fetchData = async () => {
      try {
        const trendingMovies = await fetchUrlTheMovieDb(url);
        setData(trendingMovies);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [languageLoCase, languageUpCase, page]);

  return (
    <div className="flex flex-wrap max-w-screen-lg">
      <div className="flex flex-wrap">
        {loading ? (
          <p>Loading...</p>
        ) : (
          data.map((item) => (
            <div key={item.id + Math.random()} className="w-60 h-auto">
              <Item
                urlStatus={status}
                url={imageUrl + item.poster_path}
                altName={item.id}
                itemKey={item.id}
                imageWidth="w-[200px]">
                <div className={`p-2 h-[120px]`}>
                  <Rating rating={item.vote_average} />
                  <p className={`text-sm pt-2 font-bold`}>
                    {item.title === undefined ? item.name : item.title}
                  </p>
                  <p className={`text-sm pt-2 opacity-70`}>
                    {item.release_date === undefined
                      ? item.first_air_date
                      : item.release_date}
                  </p>
                </div>
              </Item>
            </div>
          ))
        )}
      </div>
      <div className="flex  justify-center items-center w-full bg-blue-500">
        <button
          onClick={() => setPage(page > 1 ? page - 1 : page)}
          className="m-1 p-3 font-bold">
          Prev
        </button>
        <p className="m-1 p-3 font-bold">{page}</p>
        <button
          onClick={() => setPage(page <= data.length ? page + 1 : page)}
          className="m-1 p-3 font-bold">
          Next
        </button>
      </div>
    </div>
  );
}
