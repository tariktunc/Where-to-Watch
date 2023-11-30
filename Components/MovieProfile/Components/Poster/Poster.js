"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Loading from "@/Components/Loading/Loading";
import { loadImage } from "@/utils/imageUtils";

export default function Poster({ imageData, data, status }) {
  console.log("data => ", data);
  const [pageLoading, setPageLoading] = useState(true);
  const [posterImage, setPosterImage] = useState(null);
  console.log(posterImage);

  console.log("data => ", data);

  useEffect(() => {
    const moviePosterFilePath = data.poster_path;
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
    <div className="w-full relative z-1 bg-orange-400">
      <div className="flex flex-wrap justify-center bg-slate-600">
        <div className="pt-[30px] pb-[30px] pl-[40px] pr-[40px] bg-slate-300">
          <section className="flex items-start content-center bg-blue-100 ">
            <div id="poster" className="h-full min-w-min bg-slate-800">
              <div
                id="image_content"
                className="block min-w-[300px] w-[300px] h-[450px] border-0 outline-none overflow-hidden">
                {pageLoading ? (
                  <div className="text-2xl h-screen flex justify-center items-center bg-blue-100">
                    <Loading />
                  </div>
                ) : (
                  <Image
                    width={1000}
                    height={1000}
                    src={posterImage}
                    alt="Movie Poster"
                  />
                )}
              </div>
            </div>
            <div id="ott_offer" className="h-[450px] w-[500px]  bg-orange-600">
              <section className="flex flex-col min-w-[100%]  items-start content-center box-border pl-[40px]">
                <div id="title" className="flex flex-wrap">
                  <h2>{data.title}</h2>
                  <div id="facts">
                    <span>13+</span>
                    <span id="release">{data.release_date}</span>
                    <span id="runtime">{data.runtime}</span>
                  </div>
                </div>
                <ul id="rating">
                  <li id="charts">{data.vote_average}</li>
                </ul>
                <div id="header_info">
                  <h3>{data.tagline}</h3>
                  <div>
                    <p>{data.overview}</p>
                  </div>
                  <ol>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                  </ol>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
