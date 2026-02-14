"use client";
import React, { use, useEffect, useState } from "react";
import Profile from "./Components/Profile/Profile";
import Detail from "./Components/Details/Details";
import { fetchUrlTheMovieDb } from "@/utils/apiService";
import { useTranslation } from "@/hooks/useTranslation";

export default function Home({ params }) {
  const { person } = use(params);
  const [details, setDetails] = useState([]);
  const [tvCredits, setTvCredits] = useState([]);
  const [movieCredits, setMovieCredits] = useState([]);
  const [loading, setLoading] = useState(true);
  const { locale } = useTranslation();

  const detailsUrl = `https://api.themoviedb.org/3/person/${person}?language=${locale}`;
  const tvCreditsUrl = `https://api.themoviedb.org/3/person/${person}/tv_credits?language=${locale}`;
  const movieCreditsUrl = `https://api.themoviedb.org/3/person/${person}/movie_credits?language=${locale}`;

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await fetchUrlTheMovieDb(detailsUrl);
        if (data.status === 200) {
          setDetails(data.data);
        }
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    };
    const fetchTvCredits = async () => {
      try {
        const data = await fetchUrlTheMovieDb(tvCreditsUrl);
        if (data.status === 200) {
          setTvCredits(data.data);
        }
      } catch (error) {
        console.error("Error fetching tv credits:", error);
      }
    };
    const fetchMovieCredits = async () => {
      try {
        const data = await fetchUrlTheMovieDb(movieCreditsUrl);
        if (data.status === 200) {
          setMovieCredits(data.data);
        }
      } catch (error) {
        console.error("Error fetching movie credits:", error);
      }
    };

    const fetchDataAsync = async () => {
      await Promise.all([
        fetchDetails(),
        fetchTvCredits(),
        fetchMovieCredits(),
      ]);
      setLoading(false);
    };

    fetchDataAsync();
  }, [locale, detailsUrl, tvCreditsUrl, movieCreditsUrl]);

  return (
    <div className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg dark:text-white p-2 md:p-0">
      {!loading && <Profile details={details} />}
      {!loading && (
        <Detail
          tvCredits={tvCredits}
          movieCredits={movieCredits}
          biography={details.biography}
          details={details}
        />
      )}
    </div>
  );
}
