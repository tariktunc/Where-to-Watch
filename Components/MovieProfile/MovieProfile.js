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

export default function MovieProfile({ params, status }) {
  const [profileData, setProfileData] = useState(null);
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
  const fetchWatchProviderUrl = `https://api.themoviedb.org/3/${status}/${params}/watch/providers`;

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

    const fetchWatchProvider = async () => {
      try {
        const data = await fetchUrlTheMovieDb(fetchWatchProviderUrl);
        if (data.status === 200) {
          setWatchProviders(data.data);
        }
      } catch (error) {
        console.error("Error fetching cast data:", error);
      }
    };

    const fetchDataAsync = async () => {
      await Promise.all([fetchData(), fetchImageData(), fetchCastData()]);
      setLoading(false);
    };

    fetchDataAsync();
    fetchWatchProvider();
  }, [
    fetchWatchProviderUrl,
    fetchProfileDataUrl,
    fetchProfileDataUrlDefault,
    fetchImageDataUrl,
    fetchCastDataUrl,
    isLanguage,
  ]);

  return (
    <div>
      {profileData && (
        <Poster
          watchProviders={watchProviders}
          profileData={profileData}
          params={params}
          status={status}
          isLanguage={isLanguage}
        />
      )}
      <div className="flex justify-center items-center">
        <div className="max-w-screen-xl flex justify-start flex-col pb-5 custom-scrollbar overflow-x-auto ">
          <h3 className="my-2 mx-1 font-bold text-xl w-auto dark:text-white">
            Populer Player
          </h3>
          {!loading &&
            castData &&
            castData.cast &&
            castData.cast.length > 0 && (
              <ul className="flex justify-start items-center">
                {castData.cast.slice(0, 11).map((actor, index) => (
                  <Cast
                    id={actor.id}
                    key={index}
                    image={`https://www.themoviedb.org/t/p/w500${actor.profile_path}`}
                    altName={actor.original_name}
                    name={actor.name}
                    characterName={actor.character}
                    episodes={actor.known_for_department}
                  />
                ))}
              </ul>
            )}
        </div>
      </div>
      {imageData && imageData.backdrops && (
        <div className="flex justify-center items-center ">
          <div className="flex flex-col max-w-screen-xl">
            <div className="my-2 mx-1 font-bold text-xl w-auto ">
              <h3 className="text-xl font-bold dark:text-white">Backdrops</h3>
            </div>
            <div className="flex justify-start items-center pb-5 custom-scrollbar overflow-x-auto gap-5">
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
                  <Media
                    key={index}
                    filePath={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2${item.file_path}`}
                  />
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
