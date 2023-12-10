"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Rating from "@/Components/Assets/Rating/rating";

export default function Poster({
  watchProviders,
  profileData,
  status,
  params,
}) {
  const backgroundStyles = {
    backgroundImage: `url(${`https://www.themoviedb.org/t/p/w1920_and_h1080_multi_faces${profileData.backdrop_path}`})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="w-full relative z-1" style={backgroundStyles}>
      <div
        className="flex justify-center items-center"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        }}>
        <div className="px-20 py-10 w-[1600px] min-w-[400px]">
          <section className="flex py-20">
            {/* Images */}
            <div id="poster" className="h-full min-w-min">
              <div
                id="image_content"
                className="block min-w-[300px] w-[300px] h-[500px] border-0 outline-none overflow-hidden ">
                <Image
                  className="rounded-md"
                  width={1000}
                  height={1000}
                  decoding="async"
                  src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${profileData.poster_path}`}
                  alt={"alt"}
                />
                <Link
                  href={"/"}
                  className="flex justify-center items-center rounded-b-md h-10 w-auto text-white bg-blue-500 ">
                  Play
                </Link>
              </div>
            </div>
            {/* Title */}
            <div id="ott_offer" className="flex flex-col  h-auto text-white ">
              <section className="flex pl-10 py-20 flex-wrap min-w-[400px] ">
                <div
                  id="title"
                  className="flex justify-center items-center py-1">
                  <h2 className="text-6xl font-bold w-full">
                    {status === "tv" ? profileData.name : profileData.title}
                  </h2>
                  <span id="release" className="text-4xl px-2">
                    (
                    {status === "tv"
                      ? profileData.first_air_date.slice(0, 4)
                      : profileData.release_date.slice(0, 4)}
                    )
                  </span>
                </div>

                <ul id="rating" className="py-1 w-full">
                  <li id="charts">
                    <div className="flex">
                      <Rating
                        rating={profileData.vote_average}
                        w={"w-7"}
                        h={"h-7"}
                      />
                      <p className="font-italic text-xl pl-2">Rating</p>
                    </div>
                  </li>
                </ul>

                <div className="w-full">
                  <ul id="genre" className="flex flex-col py-1 w-full">
                    <li>
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
                    </li>

                    <li>
                      <h3 className="py-2 italic opacity-60 text-2xl">
                        {profileData.tagline}
                      </h3>
                      <p className="py-2 text-2xl font-bold">Overview</p>
                      <p className="py-2 text-xl">{profileData.overview}</p>
                    </li>
                    <li className="py-2 flex flex-wrap max-w-[600px] ">
                      {profileData.spoken_languages.map((item, index) => (
                        <React.Fragment key={index}>
                          {index !== profileData.spoken_languages.length - 1 &&
                          profileData.spoken_languages.length > 1 ? (
                            <p
                              className="py-2 pr-2 text-xl"
                              style={{ display: "inline" }}>
                              {item.english_name},
                            </p>
                          ) : (
                            <p
                              className="py-2 pr-2 text-xl"
                              style={{ display: "inline" }}>
                              {item.english_name}
                            </p>
                          )}
                        </React.Fragment>
                      ))}
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
