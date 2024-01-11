"use client";
import React from "react";
import Image from "next/image";
import styles from "../style.module.css";

export default function Card(props) {
  function createParagraph(overview) {
    if (overview === null || overview === undefined) {
      return <p></p>; // Kural 1: null veya undefined ise boş etiket döndür
    } else if (overview.length > 110) {
      return <p>{overview.substring(0, 110)}...</p>; // Kural 2: 200 karakterden uzunsa kısalt ve "..." ekle
    } else {
      return <p>{overview}</p>; // Kural 3: 200 karakter veya altıysa olduğu gibi döndür
    }
  }

  return (
    <div className="flex m-2 min-w-[500px] max-w-[800px] h-full rounded-md shadow-md ">
      <div className="h-[141px] min-w-[94px] w-[94px]">
        {props.src !== null ? (
          <Image
            className="rounded-l-md cursor-pointer "
            width={100}
            height={100}
            alt="alt"
            src={`https://www.themoviedb.org/t/p/w94_and_h141_bestv2${props.src}`}
          />
        ) : (
          <div className="bg-gray-200 w-full h-full flex justify-center rounded-l-md">
            <Image
              width={50}
              height={50}
              className="h-auto max-w-full rounded-l-md cursor-pointer"
              src="/placeholder-image.svg"
              alt="image description"
            />
          </div>
        )}
      </div>
      <div className={`w-[500px] px-2 py-4 ${styles.customMaxWidth}`}>
        <h2 className="font-bold">{props.title}</h2>
        {createParagraph(props.overview)}
      </div>
    </div>
  );
}
