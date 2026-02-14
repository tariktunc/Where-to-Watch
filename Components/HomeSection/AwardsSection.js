"use client";
import React, { useState, useEffect } from "react";
import { fetchUrlTheMovieDb } from "@/utils/apiService";
import { useTranslation } from "@/hooks/useTranslation";
import MediaCard from "@/Components/common/MediaCard";

export default function AwardsSection() {
  const { t, locale } = useTranslation();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchAwards = async () => {
      try {
        const res = await fetchUrlTheMovieDb(
          `https://api.themoviedb.org/3/movie/top_rated?language=${locale}&page=1`
        );
        const results = (res.data.results || [])
          .filter((m) => m.vote_average >= 8.0)
          .slice(0, 10);
        setItems(results);
      } catch (error) {
        // silently handled
      }
    };
    fetchAwards();
  }, [locale]);

  if (items.length === 0) return null;

  return (
    <section
      className="bg-gray-50 dark:bg-primary relative w-full mt-2.5"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex items-center gap-3 mb-5">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#FFD700">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <h3
            className="text-primary dark:text-white text-xl sm:text-2xl font-semibold m-0"
          >
            {t("home.awards")}
          </h3>
        </div>
        <div
          className="custom-scrollbar flex gap-3 sm:gap-4 overflow-x-auto overflow-y-hidden pb-4"
        >
          {items.map((item) => (
            <MediaCard
              key={item.id}
              id={item.id}
              title={item.title || item.name}
              posterPath={item.poster_path}
              rating={item.vote_average}
              date={item.release_date || item.first_air_date}
              mediaType={item.media_type || "movie"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
