"use client";
import React, { useState, useEffect } from "react";
import { fetchUrlTheMovieDb } from "@/utils/apiService";
import { useTranslation } from "@/hooks/useTranslation";
import MediaCard from "@/Components/common/MediaCard";
import Loading from "@/Components/common/Loading/Loading";

export default function Lists({ status, lists }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const { locale } = useTranslation();

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/${status}/${lists}?language=${locale}&page=${page}`;
    const fetchData = async () => {
      try {
        const trendingMovies = await fetchUrlTheMovieDb(url);
        setData(trendingMovies.data.results);
        setLoading(false);
      } catch (error) {
        // silently handled
      }
    };
    fetchData();
  }, [locale, page, status, lists]);

  function PaginationChange() {
    return (
      <div className="max-w-full h-20 p-4 container flex justify-center mx-auto">
        <div className="flex flex-row mx-auto">
          <button
            onClick={() => setPage(page > 1 ? page - 1 : page)}
            type="button"
            aria-label="Previous page"
            className="bg-gray-500 dark:bg-surface-dark text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3"
          >
            <div className="flex flex-row items-center">
              <svg
                className="w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <p className="ml-2">Prev</p>
            </div>
          </button>
          <div className="flex flex-row items-center">
            <p className="mx-2 dark:text-white">{page}</p>
          </div>
          <button
            onClick={() => setPage(page <= data.length ? page + 1 : page)}
            type="button"
            aria-label="Next page"
            className="bg-gray-500 dark:bg-surface-dark text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-red-700 hover:text-white px-3"
          >
            <div className="flex flex-row items-center">
              <span className="mr-2">Next</span>
              <svg
                className="w-5 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="xl:max-w-screen-2xl lg:max-w-screen-lg md:max-w-screen-md  mx-auto p-4">
      <PaginationChange />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-3 gap-y-8 sm:gap-x-4 sm:gap-y-10 px-2">
        {loading ? (
          <Loading />
        ) : (
          data.map((item) => (
            <MediaCard
              key={item.id}
              id={item.id}
              title={item.title || item.name}
              posterPath={item.poster_path || item.profile_path}
              rating={item.vote_average}
              date={item.release_date || item.first_air_date}
              mediaType={status === "tv" ? "tv" : status}
              fullWidth
            />
          ))
        )}
      </div>
      <PaginationChange />
    </div>
  );
}
