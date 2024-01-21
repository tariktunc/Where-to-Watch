"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Rating from "@/Components/common/Rating/rating";

export default function Poster() {
  const backgroundStyles = {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="w-full relative z-1" style={backgroundStyles}>
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
                <Image
                  className="rounded-md"
                  width={1000}
                  height={1000}
                  src={"/placeholder-image.svg"}
                  alt="loading"
                  decoding="async"
                />
              </div>

              <p>Home Page</p>
            </div>
            {/* Title */}
            <div
              id="ott_offer"
              className="flex flex-col justify-center h-[450px] text-white ">
              <section className="flex flex-col min-w-[400px]   items-start content-center box-border pl-[40px]">
                <div
                  id="title"
                  className="flex justify-center items-center py-1">
                  <h2 className="text-3xl font-bold">data name or title</h2>
                  <span id="release" className=" text-xl">
                    data release
                  </span>
                </div>

                <ul id="genre" className="flex py-1">
                  <li>data generes</li>
                </ul>

                <ul id="rating" className="py-1">
                  <li id="charts">
                    <div className="flex justify-center items-center">
                      <Rating rating={1} />
                      <p className="font-italic text-sm pl-2">User Score</p>
                    </div>
                  </li>
                </ul>

                <div id="header_info" className="py-1">
                  <h3 className="italic py-2 opacity-60">data.tagline</h3>
                  <div>
                    <p className="py-2">Overview</p>
                    <p className="py-2 text-sm">data.overview</p>
                  </div>
                </div>

                <ul id="language" className="py-2">
                  <li>Data Spoken</li>
                </ul>

                <ul id="production_countries">
                  <li>production_countries</li>
                </ul>
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
