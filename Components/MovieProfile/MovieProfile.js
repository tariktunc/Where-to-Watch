"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchProfile } from "@/utils/apiService";
import Poster from "@/Components/MovieProfile/Components/Poster/Poster";
import LoadingPoster from "@/Components/MovieProfile/Components/Poster/LoadingPoster";
import MediaV from "@/Components/MovieProfile/Components/MediaV/MediaV";

export default function MovieProfile({ params, status }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const [movieData, setMovieData] = useState([]);
  const [movieImageData, setMovieImageData] = useState([]);
  const [tvCredits, setTvCredits] = useState([]);
  const [movieCredits, setMovieCredits] = useState([]);

  const languageLoCase = useSelector(
    (state) => state.languageSetting.languageLoCase
  );
  const languageUpCase = useSelector(
    (state) => state.languageSetting.languageUpCase
  );

  useEffect(() => {
    const fetchData = async (url, setData, setLoading) => {
      try {
        const data = await fetchProfile(url);
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error("movieprofileJS => ", error);
        setLoading(false);
      }
    };

    const fetchDataUrl = `https://api.themoviedb.org/3/${status}/${params.profile}?language=${languageLoCase}-${languageUpCase}`;
    const fetchImageDataUrl = `https://api.themoviedb.org/3/${status}/${params.profile}/images`;
    const aggregateCreditsUrl = `https://api.themoviedb.org/3/${status}/${params.profile}/credits?language=${languageLoCase}-${languageUpCase}`;

    fetchData(fetchDataUrl, setMovieData, setIsLoading);
    fetchData(fetchImageDataUrl, setMovieImageData, setIsLoadingImage);
    fetchData(aggregateCreditsUrl, setTvCredits, setIsLoading);
    fetchData(aggregateCreditsUrl, setMovieCredits, setIsLoading);
  }, [languageLoCase, languageUpCase, params.profile, status]);

  return (
    <div>
      {isLoading || isLoadingImage ? (
        <LoadingPoster
          imageData={movieImageData}
          data={movieData}
          status={status}
        />
      ) : (
        <Poster imageData={movieImageData} data={movieData} status={status} />
      )}

      <MediaV
        data={movieData}
        status={status}
        aggregateCreditsTv={tvCredits}
        aggregateCreditsMovie={movieCredits}
      />
    </div>
  );
}
