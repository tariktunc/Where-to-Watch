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
        <li key={index}>
          <ul className="flex justify-start items-center h-20">
            <li className="p-5">
              <p>{crew.first_air_date.slice(0, 4)}</p>
            </li>
            <li className="p-5 flex flex-col">
              <Link href="#">{crew.name || crew.character}</Link>
              <span>
                &quot; as &quot;
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
      .sort(
        (a, b) => b.release_date.slice(0, 4) - a.release_date.slice(0, 4)
      )
      .map((crew, index) => (
        <li key={index}>
          <ul className="flex justify-start items-center h-20">
            <li className="p-5">
              <p>{crew.release_date.slice(0, 4)}</p>
            </li>
            <li className="p-5 flex flex-col">
              <Link href="#">{crew.character}</Link>
              <span>
                &quot; as &quot;
                <span id="character"> {crew.character}</span>
              </span>
            </li>
          </ul>
        </li>
      ));
  };

  return (
    <div className="min-w-[700px] col-start-3 col-end-7 b">
      <div id="white_column" className="my-3">
        {/* name */}
        <section id="title">
          <div className="text-sm sm:text-lg md:text-3xl dark:text-white">
            <h2 id="title" className="font-bold">
              <Link href="/">Jacob Elordi</Link>
            </h2>
          </div>
        </section>
        {/* biography */}
        <section id="full_wrapper">
          <div className="dark:text-white">
            <h3 className="font-bold text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl dark:text-white my-2">
              Biography
            </h3>
            <p className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl leading-2 ">
              {props.biography}
            </p>
          </div>
        </section>
        {/* Tv Know For */}
        <section
          id="full_wrapper"
          className="flex justify-start items-center overflow-x-auto custom-scrollbar h-[250px] md:h-[350px]"
        >
          <div id="known_for">
            <h3 className="font-bold text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl dark:text-white my-2">
              Tv Credits
            </h3>
            <div
              id="known_for_list"
              className="dark:text-white text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 
          "
            >
              {/* castList function'unu burada kullan. */}
              <ul className="flex justify-start items-center overflow-x-auto custom-scrollbar">
                {props.tvCredits.cast.map((cast, index) => (
                  <li key={index} className="w-40 px-2">
                    <div>
                      <Link href={`/tvshow/${cast.id}`}>
                        <Image
                          className="w-full rounded"
                          width={100}
                          height={100}
                          src={
                            cast.poster_path === null
                              ? "/placeholder-image.svg"
                              : `https://image.tmdb.org/t/p/w500${cast.poster_path}`
                          }
                          alt="image"
                        />
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </section>
        {/* Movie Know For */}
        <section
          id="full_wrapper"
          className="flex justify-start items-center overflow-x-auto custom-scrollbar h-[250px] md:h-[350px]"
        >
          <div id="known_for">
            <h3 className="font-bold text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl dark:text-white my-2">
              Movie Credits
            </h3>
            <div
              id="known_for_list"
              className="dark:text-white text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 
          "
            >
              {/* castList function'unu burada kullan. */}
              <ul className="flex justify-start items-center overflow-x-auto custom-scrollbar">
                {props.movieCredits.cast.map((cast, index) => (
                  <li key={index} className="w-40 px-2">
                    <div>
                      <Link href={`/movie/${cast.id}`}>
                        <Image
                          className="w-full rounded"
                          width={100}
                          height={100}
                          src={
                            cast.poster_path === null
                              ? "/placeholder-image.svg"
                              : `https://image.tmdb.org/t/p/w500${cast.poster_path}`
                          }
                          alt="image"
                        />
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </section>
        {/* credits */}
        <section id="credits">
          <div id="credits_list" className="dark:text-white">
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
        </section>
      </div>
    </div>
  );
}
