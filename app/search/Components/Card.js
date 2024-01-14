"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

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
      className="m-1 w-24 md:w-44 lg:w-52 h-38 md:h-72 lg:h-80 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <Image
        className="w-full h-full object-cover rounded-lg md:rounded-lg"
        width={1000}
        height={1000}
        alt={props.title}
        src={
          props.src !== null
            ? `https://www.themoviedb.org/t/p/w1280${props.src}`
            : "/placeholder-image.svg"
        }
      />
    </Link>
  );
}
