"use client";
//React Hooks
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// Utils
import { fetchProfile } from "@/utils/apiService";
// Components Page
import LoadingPoster from "@/Components/MovieProfile/Components/Poster/LoadingPoster";
import Poster from "@/Components/MovieProfile/Components/Poster/Poster";
import Cast from "@/Components/MovieProfile/Components/Cast/Cast";
import Media from "@/Components/MovieProfile/Components/Media/Media";

export default function MovieProfile({ params, status }) {
  const languageLoCase = useSelector(
    (state) => state.languageSetting.languageLoCase
  );
  const languageUpCase = useSelector(
    (state) => state.languageSetting.languageUpCase
  );

  const fetchDataUrl = `https://api.themoviedb.org/3/${status}/${params.profile}?language=${languageLoCase}-${languageUpCase}`;
  const fetchImageDataUrl = `https://api.themoviedb.org/3/${status}/${params.profile}/images`;
  const aggregateCreditsUrl = `https://api.themoviedb.org/3/${status}/${params.profile}/credits?language=${languageLoCase}-${languageUpCase}`;

  return (
    <div className="flex flex-col">
      <Poster />
      <Cast />
      <Media />
    </div>
  );
}
