"use client";
// React and NextJS
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
// Redux
import { setLanguage } from "@/stores/Slices/languageSettingSlice";
import { toggleTheme } from "@/stores/Slices/ThemeSlice";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faUniversalAccess } from "@fortawesome/free-solid-svg-icons";
// Components
import Country from "@/Components/Country/Country";

export default function Navbar() {
  const dispatch = useDispatch();
  const languageUpCase = useSelector(
    (state) => state.languageSetting.languageUpCase
  );
  // DARK MODE
  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };
  // DARK MODE

  const buttonUrls = [
    { name: "Home", id: "home", url: "/" },
    { name: "Movie", id: "movie", url: "/movie" },
    { name: "Tv", id: "tv", url: "/tv" },
    { name: "Popular", id: "popular", url: "/popular" },
  ];

  const handleChange = (e) => {
    localStorage.setItem("language", e.target.value);
    dispatch(setLanguage(e.target.value));
  };

  return (
    <nav className="shadow-lg px-20 flex justify-between items-center h-14">
      <div id="logo" className="flex">
        <p className="font-extrabold pr-1">BLAKFY</p>
        <p className="font-extrabold pr-1">MOVIE</p>
      </div>
      <div id="menu">
        <ul className="flex items-center  font-bold">
          {buttonUrls.map((item) => (
            <li key={item.id} className="m-3">
              <Link href={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div id="country" className="flex items-center  ">
        <FontAwesomeIcon
          className="cursor-pointer w-8 h-8 pl-3 "
          icon={faMoon}
          size="2xl"
          onClick={handleThemeToggle}
        />
        <FontAwesomeIcon
          className="cursor-pointer w-8 h-8 pl-3"
          icon={faUniversalAccess}
          size="2xl"
        />
        <span className="p-3">{languageUpCase}</span>
        <Country handleCountryChange={handleChange} />
      </div>
    </nav>
  );
}
