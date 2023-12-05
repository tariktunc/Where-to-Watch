"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/Components/Loading/Loading";
import Rating from "@/Components/Assets/Rating/rating";
import { loadImage } from "@/utils/imageUtils";

export default function Poster({ imageData, data, status }) {
  const [pageLoading, setPageLoading] = useState(true);
  const [posterImage, setPosterImage] = useState(null);
  const [pathImage, setPathImage] = useState(null);

  useEffect(() => {
    const moviePosterFilePath = data.poster_path;
    loadImage(moviePosterFilePath, "w500")
      .then((image) => {
        setPosterImage(image);
        setTimeout(() => {
          setPageLoading(false);
        }, 200);
      })
      .catch((error) => {
        console.error("Görsel yüklenirken bir hata oluştu:", error.message);
        setPageLoading(true);
      });
  }, [data]);

  useEffect(() => {
    let moviePathFilePath;
    if (imageData && imageData.backdrops && imageData.backdrops.length > 0) {
      moviePathFilePath = imageData.backdrops[0].file_path;
    } else {
      moviePathFilePath = data.poster_path;
    }

    loadImage(moviePathFilePath, "orginal")
      .then((image) => {
        setPathImage(image);
        setTimeout(() => {
          setPageLoading(false);
        }, 200);
      })
      .catch((error) => {
        console.error("Görsel yüklenirken bir hata oluştu:", error.message);
        setPageLoading(true);
      });
  }, [imageData, data]);

  return (
    <div
      className="w-full relative z-1"
      style={{
        backgroundImage: `url(${pathImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div
        className="flex justify-items-start"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        }}>
        <div className="px-20 py-10">
          <section className="flex ">
            {/* Images */}
            <div id="poster" className="h-full min-w-min ">
              <div
                id="image_content"
                className="block min-w-[300px] w-[300px] h-[450px] border-0 outline-none overflow-hidden">
                {pageLoading ? (
                  <Loading />
                ) : (
                  <Image
                    className="rounded-md"
                    width={1000}
                    height={1000}
                    src={posterImage}
                    alt={status === "movie" ? data.title : data.name}
                    lazyRoot="lazy-root"
                    lazyBoundary="lazy-boundary"
                  />
                )}
              </div>
              {data.homepage && (
                <Link
                  className="text-white flex justify-center items-center h-10 w-full bg-blue-700 rounded-b-md hover:bg-blue-500 transition-all duration-100"
                  rel="icon"
                  href={data.homepage}>
                  Play
                </Link>
              )}
            </div>
            {/* Title */}
            <div
              id="ott_offer"
              className="flex flex-col justify-center h-[450px] text-white ">
              <section className="flex flex-col min-w-[400px]   items-start content-center box-border pl-[40px]">
                {pageLoading ? (
                  <div className="flex  p-1">
                    <Loading />
                  </div>
                ) : (
                  <div
                    id="title"
                    className="flex justify-center items-center py-1">
                    <h2 className="text-3xl font-bold">
                      {status === "movie" ? data.title : data.name}
                    </h2>
                    <span id="release" className=" text-xl">
                      (
                      {status === "movie"
                        ? data.release_date.substring(0, 4)
                        : data.first_air_date.substring(0, 4)}
                      )
                    </span>
                  </div>
                )}

                {pageLoading ? (
                  <div className="flex p-1">
                    <Loading />
                  </div>
                ) : (
                  <ul id="genre" className="flex py-1">
                    {data.genres.map((genre, index) => (
                      <li key={index} className="pr-1">
                        {genre.name}
                      </li>
                    ))}
                  </ul>
                )}

                {pageLoading ? (
                  <div className="flex p-1">
                    <Loading />
                  </div>
                ) : (
                  <ul id="rating" className="py-1">
                    <li id="charts">
                      <div className="flex justify-center items-center">
                        <Rating rating={data.vote_average} />
                        <p className="font-italic text-sm pl-2">User Score</p>
                      </div>
                    </li>
                  </ul>
                )}

                {pageLoading ? (
                  <div className="flex p-1">
                    <Loading />
                  </div>
                ) : (
                  <div id="header_info" className="py-1">
                    <h3 className="italic py-2 opacity-60">{data.tagline}</h3>
                    <div>
                      <p className="py-2">Overview</p>
                      <p className="py-2 text-sm">{data.overview}</p>
                    </div>
                  </div>
                )}

                {pageLoading ? (
                  <div className="flex  p-1">
                    <Loading />
                  </div>
                ) : (
                  <ul id="language" className="py-2">
                    {data.spoken_languages.map((language, index) => (
                      <li key={index}> {language.english_name}</li>
                    ))}
                  </ul>
                )}

                {pageLoading ? (
                  <div className="flex p-1">
                    <Loading />
                  </div>
                ) : (
                  <ul id="production_countries">
                    {data.production_countries.map((country, index) => (
                      <li key={index}> {country.name}</li>
                    ))}
                  </ul>
                )}
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
