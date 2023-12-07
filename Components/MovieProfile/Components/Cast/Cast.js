"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Loading from "@/Components/Loading/Loading";

export default function MediaV() {
  const tailwindStyles = "rounded-md mx-2 min-w-[200px] max-w-[200px] h-auto ";
  const playerCard = () => {
    return (
      <li className={tailwindStyles}>
        <div>
          <Image
            className="rounded-t-md"
            src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/BE2sdjpgsa2rNTFa66f7upkaOP.jpg"
            width={1000}
            height={1000}
            alt={"alt"}
          />
        </div>
        <div className="p-2 flex flex-col justify-start items-start shadow-md rounded-b-md">
          <p id="Character" className="text-md font-bold p-1">
            Nicolas Duvauchelle
          </p>
          <p id="Name" className="text-sm p-1">
            Commissaire Fabiani
          </p>
          <p id="episodes" className="text-xs p-1">
            6 Episodes
          </p>
        </div>
      </li>
    );
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-start flex-col h-full pb-5 w-[1200px] min-w-[500px] max-w-[1200px] overflow-x-auto ">
        <h3 className="my-2 mx-1 font-bold text-xl w-auto ">Top Billed Cast</h3>
        <ul className="flex">
          {playerCard()}
          {playerCard()}
          {playerCard()}
          {playerCard()}
          {playerCard()}
          {playerCard()}
          {playerCard()}
          {playerCard()}
          {playerCard()}
          {playerCard()}
          {playerCard()}
          {playerCard()}
        </ul>
      </div>
    </div>
  );
}
