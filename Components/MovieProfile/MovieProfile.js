"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchProfile } from "@/utils/apiService";
import Loading from "@/Components/Loading/Loading";
import Poster from "@/Components/MovieProfile/Components/Poster/Poster";
import MediaV from "@/Components/MovieProfile/Components/MediaV/MediaV";

export default function MovieProfile({ params, status }) {
  const [loading, setLoading] = useState(true);
  const [loadingImage, setLoadingImage] = useState(true);
  const [data, setData] = useState([]);
  const [imageData, setImageData] = useState([]);

  const languageLoCase = useSelector(
    (state) => state.languageSetting.languageLoCase
  );
  const languageUpCase = useSelector(
    (state) => state.languageSetting.languageUpCase
  );

  useEffect(() => {
    const fetchDataUrl = `https://api.themoviedb.org/3/${status}/${params.profile}?language=${languageLoCase}-${languageUpCase}`;
    const fetchDataImage = `https://api.themoviedb.org/3/${status}/${params.profile}/images`;

    const fetchData = async () => {
      try {
        setLoading(true);
        const trendingMovies = await fetchProfile(fetchDataUrl);
        setData(trendingMovies);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    const fetchImage = async () => {
      try {
        setLoadingImage(true);
        const trendingImages = await fetchProfile(fetchDataImage);
        setImageData(trendingImages);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingImage(false);
      }
    };

    fetchData();
    fetchImage();
  }, [languageLoCase, languageUpCase, params.profile, status]);

  if (loading || loadingImage) {
    return (
      <div className="text-2xl h-screen flex justify-center items-center bg-orange-400">
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <Poster imageData={imageData} data={data} status={status} />
      <MediaV />
    </div>
  );
}
