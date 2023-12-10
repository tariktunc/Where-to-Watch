"use client";
//React Hooks
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// Utils
import { fetchUrlTheMovieDb } from "@/utils/apiService";
// Components Page
const Poster = React.lazy(() =>
  import("@/Components/MovieProfile/Components/Poster/Poster")
);
const Cast = React.lazy(() =>
  import("@/Components/MovieProfile/Components/Cast/Cast")
);
const Media = React.lazy(() =>
  import("@/Components/MovieProfile/Components/Media/Media")
);

import CastTemplate from "@/Components/MovieProfile/Components/Cast/Template";
import MediaTemplate from "@/Components/MovieProfile/Components/Media/Template";

export default function MovieProfile({ params, status }) {
  const [profileData, setProfileData] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [castData, setCastData] = useState(null);
  const [watchProviders, setWatchProviders] = useState(null);
  const [loading, setLoading] = useState(true);

  const languageLoCase = useSelector(
    (state) => state.languageSetting.languageLoCase
  );
  const languageUpCase = useSelector(
    (state) => state.languageSetting.languageUpCase
  );

  const fetchProfileDataUrl = `https://api.themoviedb.org/3/${status}/${params.profile}?language=${languageLoCase}-${languageUpCase}`;
  const fetchImageDataUrl = `https://api.themoviedb.org/3/${status}/${params.profile}/images`;
  const fetchCastDataUrl = `https://api.themoviedb.org/3/${status}/${params.profile}/credits?language=${languageLoCase}-${languageUpCase}`;
  const fetchWatchProvidersUrl = `https://api.themoviedb.org/3/${status}/${params.profile}/videos?language=${languageLoCase}-${languageUpCase}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUrlTheMovieDb(fetchProfileDataUrl);
        if (data.status === 200) {
          setProfileData(data.data);
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    const fetchImageData = async () => {
      try {
        const data = await fetchUrlTheMovieDb(fetchImageDataUrl);
        if (data.status === 200) {
          setImageData(data.data);
        }
      } catch (error) {
        console.error("Error fetching image data:", error);
      }
    };

    const fetchCastData = async () => {
      try {
        const data = await fetchUrlTheMovieDb(fetchCastDataUrl);
        if (data.status === 200) {
          setCastData(data.data);
        }
      } catch (error) {
        console.error("Error fetching cast data:", error);
      }
    };

    const fetchWatchProviders = async () => {
      try {
        const data = await fetchUrlTheMovieDb(fetchWatchProvidersUrl);
        if (data.status === 200) {
          setWatchProviders(data.data);
        }
      } catch (error) {
        console.error("Error fetching watch providers:", error);
      }
    };

    const fetchDataAsync = async () => {
      await Promise.all([
        fetchData(),
        fetchImageData(),
        fetchCastData(),
        fetchWatchProviders(),
      ]);
      setLoading(false);
    };

    fetchDataAsync();
  }, [
    fetchProfileDataUrl,
    fetchImageDataUrl,
    fetchCastDataUrl,
    fetchWatchProvidersUrl,
    languageLoCase,
    languageUpCase,
  ]);

  return (
    <div className="flex flex-col">
      <React.Suspense fallback={<div>Loading...</div>}>
        {profileData && (
          <React.Fragment>
            <Poster
              watchProviders={watchProviders}
              profileData={profileData}
              params={params}
              status={status}
            />
          </React.Fragment>
        )}
      </React.Suspense>
      <React.Suspense fallback={<div>Loading...</div>}>
        <React.Fragment>
          <ul>
            <li>XXXXX</li>
          </ul>
        </React.Fragment>
      </React.Suspense>
      <CastTemplate>
        <React.Suspense fallback={<div>Loading...</div>}>
          {!loading && castData && castData.cast && (
            <React.Fragment>
              {castData.cast.map(
                (actor, index) =>
                  index <= 10 && (
                    <Cast
                      id={index}
                      key={index}
                      image={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${actor.profile_path}`}
                      altName={actor.original_name}
                      name={actor.name}
                      characterName={actor.character}
                      episodes={actor.known_for_department}
                    />
                  )
              )}
            </React.Fragment>
          )}
        </React.Suspense>
      </CastTemplate>
      <MediaTemplate>
        <React.Suspense fallback={<div>Loading...</div>}>
          {imageData && imageData.backdrops && (
            <React.Fragment>
              {imageData.backdrops.map(
                (item, index) =>
                  item.iso_639_1 !== null && (
                    <div key={index} className="w-[533px] h-[300px]">
                      <Media
                        filePath={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2${item.file_path}`}
                      />
                    </div>
                  )
              )}
            </React.Fragment>
          )}
        </React.Suspense>
      </MediaTemplate>
    </div>
  );
}
