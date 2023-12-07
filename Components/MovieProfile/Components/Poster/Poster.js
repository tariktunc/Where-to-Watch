"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Rating from "@/Components/Assets/Rating/rating";

export default function Poster() {
  const backgroundStyles = {
    backgroundImage: `url(${"https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/3qtfbD8EapgpC7qUmJHfvrI32H4.jpg"})`,
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
        <div className="px-20 py-10 w-[1600px] min-w-[500px]">
          <section className="flex py-20">
            {/* Images */}
            <div id="poster" className="h-full min-w-min ">
              <div
                id="image_content"
                className="block min-w-[300px] w-[300px] h-[500px] border-0 outline-none overflow-hidden ">
                <Image
                  className="rounded-md"
                  width={1000}
                  height={1000}
                  src={
                    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8qSov4Y66aXtMSQoVh4iEi5wLnd.jpg"
                  }
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
                  <h2 className="text-4xl font-bold w-full">
                    Data name or title
                  </h2>
                  <span id="release" className="text-2xl px-2">
                    (2024)
                  </span>
                </div>

                <ul id="rating" className="py-1 w-full">
                  <li id="charts">
                    <div className="flex">
                      <Rating rating={10} />
                      <p className="font-italic text-sm pl-2">User Score</p>
                    </div>
                  </li>
                </ul>

                <div className="w-full">
                  <ul id="genre" className="flex flex-col py-1 w-full">
                    <li className="py-2">Data Generes</li>
                    <li>
                      <h3 className="py-2 italic opacity-60">Data Tagline</h3>
                      <p className="py-2">Overview</p>
                      <p className="py-2 text-sm">data.overview</p>
                    </li>
                    <li className="py-2">Data Spoken</li>
                    <li className="py-2">
                      <ol className="flex flex-wrap justify-between">
                        <li className="pr-2">
                          <p>People No Image</p>
                          <p>Profile And Creator</p>
                        </li>
                        <li className="pr-2">
                          <p>People No Image</p>
                          <p>Profile And Creator</p>
                        </li>
                        <li className="pr-2">
                          <p>People No Image</p>
                          <p>Profile And Creator</p>
                        </li>
                      </ol>
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
