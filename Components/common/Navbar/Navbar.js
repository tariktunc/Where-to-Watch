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
        <li
          onMouseEnter={() => props.setShowItem(true)}
          onMouseLeave={() => props.setShowItem(false)}>
          <Link
            className="hover:opacity-90"
            href={`/${props.item.url}/popular`}>
            {props.item.name}
          </Link>
        </li>
        {props.showItem && (
          <ul
            onMouseEnter={() => props.setShowItem(true)}
            onMouseLeave={() => props.setShowItem(false)}
            style={{
              backgroundColor: theme !== "light" ? "black" : "white",
              color: theme !== "light" ? "white" : "black",
            }}
            className="absolute rounded-md pt-2 w-48 zIndex-50">
            {Object.keys(submenu).map((key) => (
              <li
                key={key}
                className="hover:bg-blue-100 hover:text-black py-1 cursor-pointer rounded-md">
                <Link
                  className="block p-2"
                  href={`/${props.item.url}/${submenu[key].url}`}>
                  {submenu[key].name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </ul>
    );
  }

  const handleCountryChange = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  //! Navbar da mouse üzerine geldiğide hidden kaldırılması ayarları yapılacaktır. hamburger menu içinde ayar yapılacaktır.

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            BLAKFY MOVIE
          </span>
        </Link>
        {/* HAMBURGER MENU BUTTON */}
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {/* ROUTER LINK */}
        <div className="hidden  w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {/* MOVİE */}
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                <Link href="/movie/popular">Movie</Link>
                {/* <---- DROPDOWN MENU ----> */}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* <---- DROPDOWN MENU ----> */}
              <div
                id="dropdownNavbar"
                className="z-10 hidden  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton">
                  <li>
                    <Link
                      href="/movie/popular"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Popular
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/movie/now_playing"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Now Playing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/movie/upcoming"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Upcoming
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/movie/top_rated"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Top Rated
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            {/* TV SHOW */}
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                <Link href="/tvshow/popular">TV Show</Link>
                {/* <---- DROPDOWN MENU ----> */}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* <---- DROPDOWN MENU ----> */}
              <div
                id="dropdownNavbar"
                className="z-10 hidden  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton">
                  <li>
                    <Link
                      href="/tvshow/popular"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Popular
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tvshow/now_playing"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Airing Today
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tvshow/upcoming"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      On The Air
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tvshow/top_rated"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Top Rated
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            {/* PEOPLE */}
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                <Link href="/people/popular">People</Link>
                {/* <---- DROPDOWN MENU ----> */}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* <---- DROPDOWN MENU ----> */}
              <div
                id="dropdownNavbar"
                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton">
                  <li>
                    <Link
                      href="/people/popular"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Popular
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
