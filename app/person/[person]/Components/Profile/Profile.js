"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home(props) {
  return (
    <div className="min-w-[300px] col-start-1 col-end-3">
      <section id="orginal_header">
        <div id="image_content">
          <div id="image">
            <Image
              className="rounded-md w-[300px] h-[450px]"
              src={
                props.details.profile_path === null
                  ? "/placeholder-image.svg"
                  : `https://image.tmdb.org/t/p/w500${props.details.profile_path}`
              }
              alt="loading"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </section>
      <div>
        <section id="details">
          <div className="dark:text-white">
            <h3 className="font-bold 2xl:text-2xl lg:text-xl md:text-md sm:text-sm text-xs my-3">
              Personal Info
            </h3>
            <div className="w-full ">
              <section>
                <p className="flex flex-col my-3">
                  <strong className="my-2 font-bold">Known For</strong>
                  {props.details.known_for_department}
                </p>
                <p className="flex flex-col my-3">
                  <strong className="my-2 font-bold">Known Credits</strong>
                  Coming Soon
                </p>
                <p className="flex flex-col my-3">
                  <strong className="my-2 font-bold">Birthday</strong>
                  {props.details.birthday}
                </p>
                <p className="flex flex-col my-3">
                  <strong className="my-2 font-bold">Place Of Birth</strong>
                  {props.details.place_of_birth}
                </p>
                <p className="flex flex-col my-3">
                  <strong className="my-2 font-bold">IMDB Profile</strong>
                  <Link
                    href={`https://www.imdb.com/name/${props.details.imdb_id}`}>
                    {props.details.name}
                  </Link>
                </p>
              </section>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
