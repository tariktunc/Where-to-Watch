"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Loading from "@/Components/Loading/Loading";
import Rating from "@/Components/Assets/Rating/rating";
import { loadImage } from "@/utils/imageUtils";

export default function Poster({ imageData, data, status }) {
  const [pageLoading, setPageLoading] = useState(true);
  const [posterImage, setPosterImage] = useState(null);

  useEffect(() => {
    const moviePosterFilePath = data.poster_path;
    console.log(moviePosterFilePath);
    loadImage(moviePosterFilePath, "w500")
      .then((imageUrl) => {
        setPosterImage(imageUrl);
        setPageLoading(false);
      })
      .catch((error) => {
        console.error("Görsel yüklenirken bir hata oluştu:", error.message);
        setPageLoading(true);
      });
  }, [data]);

  return (
    <div className="w-full relative z-1 ">
      <div
        className="flex flex-wrap justify-center"
        style={{ backgroundImage: `url(${imageData})` }}>
        <div className="pt-[30px] pb-[30px] pl-[40px] pr-[40px]">
          <section className="flex items-start content-center ">
            <div id="poster" className="h-full min-w-min ">
              <div
                id="image_content"
                className="block min-w-[300px] w-[300px] h-[450px] border-0 outline-none overflow-hidden">
                {pageLoading ? (
                  <div className="text-2xl h-screen flex justify-center items-center bg-blue-100">
                    <Loading />
                  </div>
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
            </div>
            <div
              id="ott_offer"
              className="flex flex-col justify-center h-[450px] w-[500px]">
              <section className="flex flex-col min-w-[100%]  items-start content-center box-border pl-[40px]">
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

                <ul id="rating" className="py-1">
                  <li id="charts">
                    <div className="flex justify-center items-center">
                      <Rating rating={data.vote_average} />
                      <p className="font-italic text-sm pl-2">User Score</p>
                    </div>
                  </li>
                </ul>

                <div id="header_info" className="py-1">
                  <h3 className="italic py-2 opacity-60">{data.tagline}</h3>
                  <div>
                    <p className="py-2">Overview</p>
                    <p className="py-2">{data.overview}</p>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
