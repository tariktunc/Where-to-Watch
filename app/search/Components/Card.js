"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../style.module.css";

export default function Card(props) {
  function createParagraph(overview) {
    if (overview === null || overview === undefined) {
      return <p></p>; // Kural 1: null veya undefined ise boş etiket döndür
    } else if (overview.length > 110) {
      return (
        <p class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {overview.substring(0, 110)}
        </p>
      ); // Kural 2: 200 karakterden uzunsa kısalt ve "..." ekle
    } else {
      return (
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {overview}
        </p>
      ); // Kural 3: 200 karakter veya altıysa olduğu gibi döndür
    }
  }

  return (
    <Link
      href="#"
      class="m-2 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      {props.src !== null ? (
        <Image
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          width={1000}
          height={1000}
          alt="alt"
          src={`https://www.themoviedb.org/t/p/w94_and_h141_bestv2${props.src}`}
        />
      ) : (
        <div className="bg-gray-200 w-full h-full flex justify-center rounded-l-md">
          <Image
            width={50}
            height={50}
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="/placeholder-image.svg"
            alt="image description"
          />
        </div>
      )}
      <div class="flex flex-col justify-between p-4 leading-normal">
        {props.title}
        {createParagraph(props.overview)}
      </div>
    </Link>
  );
}
