import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home(props) {
  const renderTvCrewList = (crewList) => {
    return crewList
      .filter((crew) => crew.first_air_date)
      .sort(
        (a, b) => b.first_air_date.slice(0, 4) - a.first_air_date.slice(0, 4)
      )
      .map((crew, index) => (
        <li
          key={index}
          className={`${
            crew.character && crew.character.length === 0 ? "hidden" : ""
          }`}
        >
          <ul className="flex justify-start items-center h-20">
            <li className="p-5">
              <p>{crew.first_air_date.slice(0, 4)}</p>
            </li>
            <li className="p-5 flex flex-col">
              <Link href="#">{crew.name || crew.character}</Link>
              <span>
                &quot; Character &quot;
                <span id="character"> {crew.character}</span>
              </span>
            </li>
          </ul>
        </li>
      ));
  };

  const renderMovieCrewList = (crewList) => {
    return crewList
      .filter((crew) => crew.release_date)
      .sort((a, b) => b.release_date.slice(0, 4) - a.release_date.slice(0, 4))
      .map((crew, index) => (
        <li
          key={index}
          className={`${crew.character.length === 0 ? "hidden" : ""}`}
        >
          <ul className="flex justify-start items-center h-20">
            <li className="p-5">
              <p>{crew.release_date.slice(0, 4)}</p>
            </li>
            <li className="p-5 flex flex-col">
              <Link href="#">{crew.character}</Link>
              <span>
                &quot; Character &quot;
                <span id="character"> {crew.character}</span>
              </span>
            </li>
          </ul>
        </li>
      ));
  };

  function Slider(props) {
    console.log(props.credits);
    return (
      <section className="flex flex-col">
        <h3 className="font-bold text-xl md:text-4xl">{props.title}</h3>
        <ul className="flex w-[95vw] md:max-w-screen-lg overflow-x-scroll custom-scrollbar">
          {props.credits &&
            props.credits.cast.map((cast, index) => (
              <li key={index} className="mx-1 my-2 md:my-10">
                <Link href={`/tvshow/${cast.id}`}>
                  <Image
                    width={500}
                    height={500}
                    src={
                      cast.poster_path === null
                        ? "/placeholder-image.svg"
                        : `https://image.tmdb.org/t/p/w500${cast.poster_path}`
                    }
                    alt={`Cast` + cast.name}
                    className="max-w-[100px] md:max-w-[200px]"
                  />
                </Link>
              </li>
            ))}
        </ul>
      </section>
    );
  }

  return (
    <div className="flex flex-col ">
      {/* biography */}
      <section className="my-10">
        <h3 className="font-bold text-xl md:text-2xl">Biography</h3>
        <p className="leading-loose text-sm md:text-lg">{props.biography}</p>
      </section>
      {/* Tv Know For */}
      <Slider title={"TV"} credits={props.tvCredits} />
      <Slider title={"MOVIE"} credits={props.movieCredits} />
      {/* credits */}
      {props.tvCredits.cast.length > 0 && (
        <>
          <h3 className="font-bold py-4 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">
            Tv Credits
          </h3>
          <div className="w-full rounded shadow-xl border-solid border-inherit dark:border-gray-800 border-2">
            <ul>{renderTvCrewList(props.tvCredits.cast)}</ul>
          </div>
        </>
      )}
      {props.movieCredits.cast.length > 0 && (
        <>
          <h3 className="font-bold py-4 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">
            Movie Credits
          </h3>
          <div className="w-full rounded shadow-xl border-solid border-inherit dark:border-gray-800 border-2">
            <ul>{renderMovieCrewList(props.movieCredits.cast)}</ul>
          </div>
        </>
      )}
      {props.tvCredits.crew.length > 0 && (
        <>
          <h3 className="font-bold py-4 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">
            Production
          </h3>
          <div className="w-full rounded shadow-xl border-solid border-inherit dark:border-gray-800 border-2">
            <ul>{renderTvCrewList(props.tvCredits.crew)}</ul>
          </div>
        </>
      )}
    </div>
  );
}
