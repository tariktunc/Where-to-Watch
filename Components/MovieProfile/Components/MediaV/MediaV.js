"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Loading from "@/Components/Loading/Loading";

export default function MediaV({
  data,
  status,
  aggregateCreditsTv,
  aggregateCreditsMovie,
}) {
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    if (aggregateCreditsTv) {
      setPageLoading(false);
    }
  }, [aggregateCreditsTv]);

  return (
    <div>
      <h3>Top Billed Cast</h3>
      <ul className="flex">
        {/* {pageLoading ? (
          <Loading />
        ) : (
          <>
            {aggregateCreditsTv.cast.map(
              (cast, index) =>
                index < 5 && (
                  <li key={cast.id} className="px-2">
                    <Image
                      key={index}
                      className={index}
                      width={200}
                      height={200}
                      src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                      alt={cast.name}
                    />
                    <p>{cast.name}</p>
                    <p>{cast.character}</p>
                  </li>
                )
            )}
          </>
        )} */}
      </ul>
      <ul className="flex">
        {pageLoading ? (
          <Loading />
        ) : (
          <>
            {/* {aggregateCreditsTv.crew.map(
              (crew, index) =>
                index < 5 && (
                  <li key={crew.id} className="px-2 ">
                    <Image
                      key={index}
                      className={index}
                      width={200}
                      height={200}
                      src={`https://image.tmdb.org/t/p/w500${crew.profile_path}`}
                      alt={crew.name}
                    />
                    <p>{crew.name}</p>
                    <p>{crew.job}</p>
                  </li>
                )
            )} */}
          </>
        )}
      </ul>
    </div>
  );
}
