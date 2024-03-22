"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Profile from "./Components/Profile/Profile";
import Detail from "./Components/Details/Details";
import { fetchUrlTheMovieDb } from "@/utils/apiService";

export default function Home(props) {
  const [details, setDetails] = useState([]);
  const [tvCredits, setTvCredits] = useState([]);
  const [movieCredits, setMovieCredits] = useState([]);
  const [loading, setLoading] = useState(true);

  // Redux
  const language = useSelector((state) => state.languageSetting);
  const isLanguage = `${language.toLowerCase()}-${language}`;
  // URL
  const detailsUrl = `https://api.themoviedb.org/3/person/${props.params.person}?language=${isLanguage}`;
  const tvCreditsUrl = `https://api.themoviedb.org/3/person/${props.params.person}/tv_credits?language=${isLanguage}`;
  const movieCreditsUrl = `https://api.themoviedb.org/3/person/${props.params.person}/movie_credits?language=${isLanguage}`;

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await fetchUrlTheMovieDb(detailsUrl);
        if (data.status === 200) {
          setDetails(data.data);
        }
      } catch (error) {
        console.error("Error fetching watch providers:", error);
      }
    };
    const fetchTvCredits = async () => {
      try {
        const data = await fetchUrlTheMovieDb(tvCreditsUrl);
        if (data.status === 200) {
          setTvCredits(data.data);
        }
      } catch (error) {
        console.error("Error fetching watch providers:", error);
      }
    };
    const fetchMovieCredits = async () => {
      try {
        const data = await fetchUrlTheMovieDb(movieCreditsUrl);
        if (data.status === 200) {
          setMovieCredits(data.data);
        }
      } catch (error) {
        console.error("Error fetching watch providers:", error);
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
  }, [isLanguage]);

  return (
    <div className="sm:max-screen-sm md:max-w-screen-md lg:max-w-screen-lg dark:text-white p-2 md:p-0">
      {/* Grey */}
      {!loading && <Profile details={details} />}
      {/* White */}
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
