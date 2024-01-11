"use client";
// React and NextJS
import Link from "next/link";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "@/stores/Slices/languageSettingSlice";
import { toggleTheme } from "@/stores/Slices/ThemeSlice";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faUniversalAccess } from "@fortawesome/free-solid-svg-icons";
// Components
import Country from "@/Components/Country/Country";

export default function Navbar() {
  const [showMovies, setShowMovies] = useState(false);
  const [showTVShows, setShowTVShows] = useState(false);
  const [showPeople, setShowPeople] = useState(false);
  const dispatch = useDispatch();
  const language = useSelector((state) => state.languageSetting);
  const theme = useSelector((state) => state.theme.theme);

  const pageRouter = {
    movie: {
      name: "Movie",
      url: "movie",
      submenu: {
        popular: {
          name: "Popular",
          url: "popular",
        },
        nowPlaying: {
          name: "Now Playing",
          url: "now_playing",
        },
        upcoming: {
          name: "Upcoming",
          url: "upcoming",
        },
        topRated: {
          name: "Top Rated",
          url: "top_rated",
        },
      },
    },
    tv: {
      name: "TV Show",
      url: "tvshow",
      submenu: {
        popular: {
          name: "Popular",
          url: "popular",
        },
        airingToday: {
          name: "Airing Today",
          url: "airing_today",
        },
        onTv: {
          name: "On Tv",
          url: "on_the_air",
        },
        topRated: {
          name: "Top Rated",
          url: "top_rated",
        },
      },
    },
    people: {
      name: "People",
      url: "people",
      submenu: {
        popular: {
          name: "Popular",
          url: "popular",
        },
      },
    },
  };

  function Routing(props) {
    const submenu = props.item.submenu;
    return (
      <ul className="m-3 transition-all duraction-300">
        <li>
          <Link
            href="#"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            Pricing
          </Link>
        </li>
        {props.showItem && (
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown">
            <ul
              onMouseEnter={() => props.setShowItem(true)}
              onMouseLeave={() => props.setShowItem(false)}
              style={{
                backgroundColor: theme !== "light" ? "black" : "white",
                color: theme !== "light" ? "white" : "black",
              }}
              className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {Object.keys(submenu).map((key) => (
                <li key={key}>
                  {/* Pricing */}
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    {submenu[key].name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </ul>
    );
  }

  const handleCountryChange = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  return (
    <nav
      style={{
        backgroundColor: theme !== "light" ? "black" : "white",
        color: theme !== "light" ? "white" : "black",
      }}
      className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div id="logo" className="flex">
        <Link href="/" className="font-extrabold pr-1">
          BLAKFY
        </Link>
        <Link href={"/"} className="font-extrabold pr-1">
          MOVIE
        </Link>
      </div>
      <div id="menu" className="flex z-50">
        <Routing
          item={pageRouter.movie}
          showItem={showMovies}
          setShowItem={setShowMovies}
        />
        <Routing
          item={pageRouter.tv}
          showItem={showTVShows}
          setShowItem={setShowTVShows}
        />
        <Routing
          item={pageRouter.people}
          showItem={showPeople}
          setShowItem={setShowPeople}
        />
      </div>
      <div id="country" className="flex items-center  ">
        <FontAwesomeIcon
          onClick={() => dispatch(toggleTheme())}
          className="cursor-pointer w-8 h-8 pl-3 "
          icon={faMoon}
          size="2xl"
        />
        <FontAwesomeIcon
          className="cursor-pointer w-8 h-8 pl-3"
          icon={faUniversalAccess}
          size="2xl"
        />
        <span className="p-3">{language}</span>
        <Country
          handleCountryChange={handleCountryChange}
          language={language}
        />
      </div>
    </nav>
  );
}
