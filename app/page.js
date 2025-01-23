"use client";
import React, { useState, useEffect } from "react";
import HorizontallyItem from "@/Components/HorizontallyItem/HorizontallyItem";
import Navbar from "@/Components/common/Navbar/Navbar";
import DiscoverSection from "@/Components/DiscoverSection/DiscoverSection";
import { useSelector } from "react-redux";
export default function Home() {
  const [movieOrTvPreference, setMovieOrTvPreference] = useState("movie");
  const [weekOrDayPreference, setWeekOrDayPreference] = useState("day");
  const theme = useSelector((state) => state.theme.theme);
  useEffect(() => {
    if (theme === "dark") {
      return document.body.classList.add("dark", "bg-gray-900");
    } else {
      return document.body.classList.remove("dark", "bg-gray-900");
    }
  }, [theme]);
  return (
    <>
      <Navbar />
      <DiscoverSection />
      <div className="w-full flex justify-center">
        <div className="max-w-screen-xl">
          <p className="px-6 pt-3 dark:text-white">Top List</p>
          <div className="flex gap-5 p-5">
  <div className="flex gap-1 rounded-sm">
    <button
      className={`${
        movieOrTvPreference === "movie"
          ? "bg-blue-500 text-white dark:bg-blue-400 dark:text-black"
          : "bg-gray-300 text-black dark:bg-gray-800 dark:text-gray-300"
      } hover:opacity-80 transition ease-in-out duration-100 w-16 h-8 rounded-sm`}
      onClick={() => setMovieOrTvPreference("movie")}
    >
      Movie
    </button>
    <button
      className={`${
        movieOrTvPreference === "tv"
          ? "bg-blue-500 text-white dark:bg-blue-400 dark:text-black"
          : "bg-gray-300 text-black dark:bg-gray-800 dark:text-gray-300"
      } hover:opacity-80 transition ease-in-out duration-100 w-16 h-8 rounded-sm`}
      onClick={() => setMovieOrTvPreference("tv")}
    >
      Tv
    </button>
  </div>
  <div className="flex gap-1 rounded-sm">
    <button
      className={`${
        weekOrDayPreference === "day"
          ? "bg-green-500 text-white dark:bg-green-400 dark:text-black"
          : "bg-gray-300 text-black dark:bg-gray-800 dark:text-gray-300"
      } hover:opacity-80 transition ease-in-out duration-100 w-16 h-8 rounded-sm`}
      onClick={() => setWeekOrDayPreference("day")}
    >
      Day
    </button>
    <button
      className={`${
        weekOrDayPreference === "week"
          ? "bg-green-500 text-white dark:bg-green-400 dark:text-black"
          : "bg-gray-300 text-black dark:bg-gray-800 dark:text-gray-300"
      } hover:opacity-80 transition ease-in-out duration-100 w-16 h-8 rounded-sm`}
      onClick={() => setWeekOrDayPreference("week")}
    >
      Week
    </button>
  </div>
</div>

          {
            <HorizontallyItem
              urlStatus={weekOrDayPreference}
              status={movieOrTvPreference}
            />
          }
          {/* <HorizontallyItem urlStatus={"week"} status={"movie"} />
          <HorizontallyItem urlStatus={"week"} status={"tv"} /> */}
        </div>
      </div>
    </>
  );
}
