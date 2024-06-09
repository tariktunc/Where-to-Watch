"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Rating from "@/Components/common/Rating/rating";

export default function Poster({
  watchProviders,
  profileData,
  params,
  status,
  isLanguage,
}) {
  const backgroundStyles = {
    backgroundImage: `url(${`https://www.themoviedb.org/t/p/w1920_and_h1080_multi_faces${profileData.backdrop_path}`})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const [watchProvider, setWatchProvider] = useState(null);

  useEffect(() => {
    // 'watchProviders' içindeki 'results' objesini değişkene atama
    const { results } = watchProviders || {};

    // 'US' veya 'TR' anahtarlarına göre uygun değeri seçme
    const provider = results[isLanguage?.slice(0, 2)?.toUpperCase() || "US"];

    if (provider) {
      // Eğer provider bulunursa, durumu güncelle
      setWatchProvider(provider);
    } else {
      // Provider bulunamazsa, konsola log yaz
      console.log("No provider available");
    }
  }, [watchProviders, isLanguage]);

  return (
    <div className="w-full relative z-1" style={backgroundStyles}>
      <div
        className="flex justify-center items-center"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        }}
      >
        <section className="flex flex-wrap md:flex-nowrap items-center  gap-5 p-20 initial:max-w-sm md:max-w-screen-xl  text-white">
          {/* Images */}
          <Image
            className="rounded-md max-w-96 min-w-60"
            width={500}
            height={500}
            decoding="async"
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${profileData.poster_path}`}
            alt={"alt"}
          />
          {/* Title */}
          <div>
            <div className="sm:flex sm:flex-wrap md:flex items-center gap-5">
              <h2 className="initial:text-2xl md:text-4xl font-bold">
                {status === "tv" ? profileData.name : profileData.title}
              </h2>
              <span id="release" className="initial:text-xl md:text-4xl">
                (
                {status === "tv"
                  ? profileData.first_air_date.slice(0, 4)
                  : profileData.release_date.slice(0, 4)}
                )
              </span>
            </div>
            {/* Rating */}
            <div id="rating" className="flex initial:flex-wrap md:flex-nowrap">
              <p className="font-italic initial:text-xl sm:text-2xl">Rating</p>
              <Rating rating={profileData.vote_average} w={"w-7"} h={"h-7"} />
            </div>
            {/* Genres */}
            <ul id="genre" className="flex flex-col py-1 w-full ">
              {/* Tür */}
              <ol className="flex">
                {profileData.genres.map((item, index) => (
                  <li key={index} className="pr-2 text-xl">
                    {index !== profileData.genres.length - 1 ? (
                      <span>{item.name}, </span>
                    ) : (
                      <span>{item.name}</span>
                    )}
                  </li>
                ))}
              </ol>
              {/* Tag line */}
              <li>
                <h3 className="py-2 italic opacity-60 text-2xl">
                  {profileData.tagline}
                </h3>
                <p className="py-2 text-2xl font-bold">Overview</p>
                <p className="py-2 initial:text-md sm:text-xl">
                  {profileData.overview}
                </p>
              </li>
              <li className="py-2 flex flex-wrap max-w-[600px]">
                {profileData.spoken_languages.map((item, index) => (
                  <React.Fragment key={index}>
                    {index !== profileData.spoken_languages.length - 1 &&
                    profileData.spoken_languages.length > 1 ? (
                      <p
                        className="py-2 pr-2 text-xl"
                        style={{ display: "inline" }}
                      >
                        {item.english_name},
                      </p>
                    ) : (
                      <p
                        className="py-2 pr-2 text-xl"
                        style={{ display: "inline" }}
                      >
                        {item.english_name}
                      </p>
                    )}
                  </React.Fragment>
                ))}
              </li>
            </ul>
            {/* Watch Provider */}
            <div>
              <h3>Just Watch</h3>
              {watchProvider?.flatrate?.length > 0 ? (
                <div>
                  <Link href={watchProvider.link}>
                    <Image
                      src={`https://www.themoviedb.org/t/p/w500${watchProvider.flatrate[0].logo_path}`}
                      alt="logo"
                      width={50}
                      height={50}
                    />
                  </Link>
                </div>
              ) : (
                <p>Not available</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
