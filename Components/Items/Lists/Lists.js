// Popular Page istegi components donusturulecek.
"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import Item from "@/Components/Items/Item/Item";
import Item from "@/Components/VerticalItem/Item";
import Rating from "@/Components/common/Rating/rating";
import { fetchUrlTheMovieDb } from "@/utils/apiService";

export default function Lists({ status, lists }) {
  console.log(status);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const language = useSelector((state) => state.languageSetting);
  const isLanguage = `${language.toLowerCase()}-${language}`;

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/${status}/${lists}?language=${isLanguage}&page=${page}`;
    const fetchData = async () => {
      try {
        const trendingMovies = await fetchUrlTheMovieDb(url);
        setData(trendingMovies.data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [isLanguage, page]);

  function PaginationChange() {
    return (
      <div className="max-w-full h-20 p-4 container flex justify-center mx-auto">
        <div className="flex flex-row mx-auto">
          <button
            onClick={() => setPage(page > 1 ? page - 1 : page)}
            type="button"
            className="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3">
            <div className="flex flex-row items-center">
              <svg
                className="w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"></path>
              </svg>
              <p className="ml-2">Prev</p>
            </div>
          </button>
          <div className="flex flex-row items-center">
            <p className="mx-2">{page}</p>
          </div>
          <button
            onClick={() => setPage(page <= data.length ? page + 1 : page)}
            type="button"
            className="bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-red-700 hover:text-white px-3">
            <div className="flex flex-row items-center">
              <span className="mr-2">Next</span>
              <svg
                className="w-5 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap max-w-[1200px] w-[1000px] min-w-[500px] min-h-[1600px] mx-auto">
      <PaginationChange />
      <div className="flex flex-wrap">
        {loading ? (
          <p>Loading...</p>
        ) : (
          data.map((item, index) => (
            <div key={index} className="w-60 h-auto">
              <Item
                key={item.id}
                name={item.name || item.title}
                imageUrl={`${imageUrl}${
                  item.poster_path || item.backdrop_path || item.profile_path
                }`}
                rating={item.vote_average || item.vote_count}
                release={item.release_date || item.first_air_date}
              />
            </div>
          ))
        )}
      </div>
      <PaginationChange />
    </div>
  );
}
