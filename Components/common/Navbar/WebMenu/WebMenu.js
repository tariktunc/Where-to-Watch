import React, { useState } from "react";
import Link from "next/link";
import Country from "@/Components/Country/Country";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faUniversalAccess } from "@fortawesome/free-solid-svg-icons";
import { setLanguage } from "@/stores/Slices/languageSettingSlice";
import { toggleTheme } from "@/stores/Slices/ThemeSlice";

export default function WebMenu(props) {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.languageSetting);
  const [activeMenu, setActiveMenu] = React.useState(null);

  const handleMouseOver = (menuId) => {
    setActiveMenu(menuId);
  };

  const handleMouseOut = () => {
    setActiveMenu(null);
  };

  const handleCountryChange = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };

  const handleAccessibilityChange = () => {
    alert("Accessibility not active");
    console.log("Accessibility not active");
  };

  function menuStyle() {
    switch (props.activeMobileMenu) {
      case true:
        return "flex flex-col justify-center items-center w-full mt-10 gap-10";
      case false:
        return "hidden md:flex";
      default:
        return "hidden";
    }
  }

  return (
    <div className={menuStyle()}>
      <ul className="md:flex flex-col md:flex-row items-center md:gap-5">
        {/* MOVİE */}
        <li
          onMouseOver={() => handleMouseOver("movie")}
          onMouseOut={handleMouseOut}
          className="m-5"
        >
          <button
            id="dropdownNavbarLink"
            data-dropdown-toggle="dropdownNavbar"
            className=" flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
          >
            <Link href="/movie/popular">Movie</Link>
            {/* <---- DROPDOWN MENU ----> */}
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {/* <---- DROPDOWN MENU ----> */}
          <div
            style={{ display: activeMenu === "movie" ? "block" : "none" }}
            className=" z-10 absolute  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              className=" py-2 text-sm text-gray-700 dark:text-gray-400"
              aria-labelledby="dropdownLargeButton"
            >
              <li>
                <Link
                  href="/movie/popular"
                  className=" block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Popular
                </Link>
              </li>
              <li>
                <Link
                  href="/movie/now_playing"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Now Playing
                </Link>
              </li>
              <li>
                <Link
                  href="/movie/upcoming"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Upcoming
                </Link>
              </li>
              <li>
                <Link
                  href="/movie/top_rated"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Top Rated
                </Link>
              </li>
            </ul>
          </div>
        </li>
        {/* TV SHOW */}
        <li
          onMouseOver={() => handleMouseOver("tvshow")}
          onMouseOut={handleMouseOut}
          className="m-5"
        >
          <button
            id="dropdownNavbarLink"
            data-dropdown-toggle="dropdownNavbar"
            className=" flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
          >
            <Link href="/tvshow/popular">TV Show</Link>
            {/* <---- DROPDOWN MENU ----> */}
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {/* <---- DROPDOWN MENU ----> */}
          <div
            style={{ display: activeMenu === "tvshow" ? "block" : "none" }}
            id="dropdownNavbar"
            className=" z-10 absolute  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              className=" py-2 text-sm text-gray-700 dark:text-gray-400"
              aria-labelledby="dropdownLargeButton"
            >
              <li>
                <Link
                  href="/tvshow/popular"
                  className=" block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Popular
                </Link>
              </li>
              <li>
                <Link
                  href="/tvshow/airing_today"
                  className=" block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Airing Today
                </Link>
              </li>
              <li>
                <Link
                  href="/tvshow/on_the_air"
                  className=" block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  On The Air
                </Link>
              </li>
              <li>
                <Link
                  href="/tvshow/top_rated"
                  className=" block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Top Rated
                </Link>
              </li>
            </ul>
          </div>
        </li>
        {/* PEOPLE */}
        <li
          onMouseOver={() => handleMouseOver("people")}
          onMouseOut={handleMouseOut}
          className="m-5"
        >
          <button
            id="dropdownNavbarLink"
            data-dropdown-toggle="dropdownNavbar"
            className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
          >
            <Link href="/people/popular">People</Link>
            {/* <---- DROPDOWN MENU ----> */}
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {/* <---- DROPDOWN MENU ----> */}
          <div
            style={{ display: activeMenu === "people" ? "block" : "none" }}
            id="dropdownNavbar"
            className="z-10 absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-400"
              aria-labelledby="dropdownLargeButton"
            >
              <li>
                <Link
                  href="/people/popular"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Popular
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      {/* DARK MODE AND ACCESSIBILITY */}
      <ul className="flex items-center gap-5">
        <li>
          <div className="flex">
            <FontAwesomeIcon
              onClick={handleThemeChange}
              className="w-full px-2 h-8 dark:hover:bg-gray-700 md:dark:hover:bg-gray-900 md:hover:text-blue-500 dark:text-white"
              icon={faMoon}
              size="2xl"
            />
            <FontAwesomeIcon
              onClick={handleAccessibilityChange}
              className="w-full px-2 h-8 dark:hover:bg-gray-700 md:dark:hover:bg-gray-900 md:hover:text-blue-500 rounded dark:text-white"
              icon={faUniversalAccess}
              size="2xl"
            />
          </div>
        </li>
        {/* COUNTRY */}
        <li className="flex justify-center  items-center  py-2 px-3 ">
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
  );
}
