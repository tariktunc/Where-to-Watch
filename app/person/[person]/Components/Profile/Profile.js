"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home(props) {
  return (
    <section className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-10 ">
      {/* IMAGE */}
      <Image
        className="rounded-md "
        src={
          props.details.profile_path === null
            ? "/placeholder-image.svg"
            : `https://image.tmdb.org/t/p/w500${props.details.profile_path}`
        }
        alt={props.details.name}
        width={300}
        height={300}
      />
      {/* DETAILS */}
      <div className="pt-5 md:pt-10">
        <h2 id="title" className="text-xl md:text-5xl">
          <Link href="/">Jacob Elordi</Link>
        </h2>
        <div className="flex flex-wrap justify-start gap-5 md:gap-10 mt-5 md:mt-10">
          <div>
            <strong className="text-bold">Known For</strong>
            <p>{props.details.known_for_department}</p>
          </div>
          <div>
            <p>Birthday</p>
            <p>{props.details.birthday}</p>
          </div>
          <div>
            <p>Place Of Birth</p>
            <p>{props.details.place_of_birth}</p>
          </div>
          <div>
            <p>IMDB Profile</p>
            <p className="text-blue-200 italic">
              <Link href={`https://www.imdb.com/name/${props.details.imdb_id}`}>
                {props.details.name}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
