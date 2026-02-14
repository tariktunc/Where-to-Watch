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
        <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {overview.substring(0, 110)}
        </p>
      ); // Kural 2: 200 karakterden uzunsa kısalt ve "..." ekle
    } else {
      return (
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {overview}
        </p>
      ); // Kural 3: 200 karakter veya altıysa olduğu gibi döndür
    }
  }

  return (
    <Link href={props.link} className="initial:w-24 sm:w-52">
      <Image
        className="w-full h-full object-cover rounded-sm"
        width={1000}
        height={1000}
        alt={props.title}
        src={
          props.src !== null
            ? `https://www.themoviedb.org/t/p/w500${props.src}`
            : "/placeholder-image.svg"
        }
      />
    </Link>
  );
}
