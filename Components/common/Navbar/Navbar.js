"use client";
// React and NextJS
import Link from "next/link";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "@/stores/Slices/languageSettingSlice";
import Image from "next/image";
import { toggleTheme } from "@/stores/Slices/ThemeSlice";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faUniversalAccess } from "@fortawesome/free-solid-svg-icons";
// Components
import Country from "@/Components/Country/Country";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const dispatch = useDispatch();
  const language = useSelector((state) => state.languageSetting);
  const theme = useSelector((state) => state.theme.theme);

  const handleClick = () => {
    setActiveMobileMenu(!activeMobileMenu);
  };

  const handleMouseOver = (menuId) => {
    setActiveMenu(menuId);
  };

  const handleMouseOut = () => {
    setActiveMenu(null);
  };

  const handleCountryChange = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  return (
    <nav class="bg-white border-gray-200 dark:bg-gray-900 w-full">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            width={100}
            height={100}
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className=" self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            BLAKFY MOVIE
          </span>
        </Link>

        {/* HAMBURGER MENU BUTTON */}
        <button
          onClick={() => {
            handleClick();
          }}
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className=" inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
        <div
          className={`${
            activeMobileMenu ? "" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-dropdown">
          <ul className=" flex flex-col md:items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {/* MOVİE */}
            <li
              onMouseOver={() => handleMouseOver("movie")}
              onMouseOut={handleMouseOut}>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className=" flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
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
                style={{ display: activeMenu === "movie" ? "block" : "none" }}
                className=" z-10 absolute  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul
                  className=" py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton">
                  <li>
                    <Link
                      href="/movie/popular"
                      className=" block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
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
            <li
              onMouseOver={() => handleMouseOver("tvshow")}
              onMouseOut={handleMouseOut}>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className=" flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
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
                style={{ display: activeMenu === "tvshow" ? "block" : "none" }}
                id="dropdownNavbar"
                className=" z-10 absolute  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul
                  className=" py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton">
                  <li>
                    <Link
                      href="/tvshow/popular"
                      className=" block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Popular
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tvshow/airing_today"
                      className=" block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Airing Today
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tvshow/on_the_air"
                      className=" block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      On The Air
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tvshow/top_rated"
                      className=" block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Top Rated
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            {/* PEOPLE */}
            <li
              onMouseOver={() => handleMouseOver("people")}
              onMouseOut={handleMouseOut}>
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
                style={{ display: activeMenu === "people" ? "block" : "none" }}
                id="dropdownNavbar"
                className="z-10 absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
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

            {/* DARK MODE */}
            <li>
              <div className="flex items-center py-2 px-3">
                <FontAwesomeIcon
                  className="w-full px-2 h-8 dark:hover:bg-gray-700 md:dark:hover:bg-gray-900 md:hover:text-blue-500 rounded dark:text-white"
                  icon={faMoon}
                  size="2xl"
                />
                <FontAwesomeIcon
                  className="w-full px-2 h-8 dark:hover:bg-gray-700 md:dark:hover:bg-gray-900 md:hover:text-blue-500 rounded dark:text-white"
                  icon={faUniversalAccess}
                  size="2xl"
                />
              </div>
            </li>
            {/* COUNTRY */}
            <li className="flex justify-start items-center  py-2 px-3 ">
              <p className="md:hover:text-blue-500 rounded pr-2 dark:text-white">
                {language}
              </p>
              <Country
                handleCountryChange={handleCountryChange}
                language={language}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
