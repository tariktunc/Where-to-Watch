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
  const [profileDataDefault, setProfileDataDefault] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [castData, setCastData] = useState(null);
  const [watchProviders, setWatchProviders] = useState(null);
  const [loading, setLoading] = useState(true);
  // Redux
  const language = useSelector((state) => state.languageSetting);
  const isLanguage = `${language.toLowerCase()}-${language}`;

  const fetchProfileDataUrl = `https://api.themoviedb.org/3/${status}/${params}?language=${isLanguage}`;
  const fetchProfileDataUrlDefault = `https://api.themoviedb.org/3/${status}/${params}?language=en-US`;
  const fetchImageDataUrl = `https://api.themoviedb.org/3/${status}/${params}/images`;
  const fetchCastDataUrl = `https://api.themoviedb.org/3/${status}/${params}/credits?language=${isLanguage}`;
  const fetchWatchProvidersUrl = `https://api.themoviedb.org/3/${status}/${params}/videos?language=${isLanguage}`;

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

    const fetchDataDefault = async () => {
      try {
        const data = await fetchUrlTheMovieDb(fetchProfileDataUrlDefault);
        if (data.status === 200) {
          setProfileDataDefault(data.data);
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
        fetchDataDefault(),
        fetchImageData(),
        fetchCastData(),
        fetchWatchProviders(),
      ]);
      setLoading(false);
    };

    fetchDataAsync();
  }, [
    fetchProfileDataUrl,
    fetchProfileDataUrlDefault,
    fetchImageDataUrl,
    fetchCastDataUrl,
    fetchWatchProvidersUrl,
    isLanguage,
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
      <CastTemplate>
        <React.Suspense fallback={<div>Loading...</div>}>
          {!loading && castData && castData.cast && castData.cast.length > 0 ? (
            <React.Fragment>
              {castData.cast.slice(0, 11).map((actor, index) => (
                <Cast
                  id={index}
                  key={index}
                  image={`https://www.themoviedb.org/t/p/w500${actor.profile_path}`}
                  altName={actor.original_name}
                  name={actor.name}
                  characterName={actor.character}
                  episodes={actor.known_for_department}
                />
              ))}
            </React.Fragment>
          ) : (
            <p>
              We don&apos;t have any cast added to this TV Show. You can help by
              adding some!
            </p>
          )}
        </React.Suspense>
      </CastTemplate>
      <MediaTemplate>
        <React.Suspense fallback={<div>Loading...</div>}>
          {imageData && imageData.backdrops && (
            <React.Fragment>
              {imageData.backdrops
                .filter((item) => item.iso_639_1 !== null)
                .slice(
                  0,
                  Math.min(
                    10,
                    imageData.backdrops.filter(
                      (item) => item.iso_639_1 !== null
                    ).length
                  )
                )
                .map((item, index) => (
                  <div key={index} className="w-[533px] h-[300px] m-1">
                    <Media
                      filePath={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2${item.file_path}`}
                    />
                  </div>
                ))}
            </React.Fragment>
          )}
        </React.Suspense>
      </MediaTemplate>
    </div>
  );
}
