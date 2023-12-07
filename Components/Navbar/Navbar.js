"use client";
import Link from "next/link";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "@/stores/Slices/languageSettingSlice";
import Country from "@/Components/Country/Country";

export default function Navbar() {
  const dispatch = useDispatch();
  const languageUpCase = useSelector(
    (state) => state.languageSetting.languageUpCase
  );

  const buttonUrls = [
    { name: "Home", id: "home", url: "/" },
    { name: "Movie", id: "movie", url: "/movie" },
    { name: "Tv", id: "tv", url: "/tv" },
    { name: "Popular", id: "popular", url: "/popular" },
  ];

  const handleChange = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  return (
    <nav className="bg-[#221f1f] h-14 flex ">
      {/* Logo */}
      <div className="text-white text-3xl w-full">LOGO</div>

      {/* Buttons */}
      <div className="flex justify-center items-center h-full w-full">
        {buttonUrls.map((button) => (
          <div
            className="w-full h-full items-center justify-center flex m-1"
            key={button.id}>
            <Link
              className="w-full h-full items-center justify-center flex text-white text-md hover:opacity-50"
              href={button.url}>
              {button.name}
            </Link>
          </div>
        ))}
      </div>

      {/* Search Bar */}
      <div className="text-white text-md flex justify-end w-full">
        <div className="text-black w-60 flex items-center">
          <p className="mr-3 text-white">{languageUpCase}</p>
          <Country
            handleCountryChange={handleChange}
            selected={languageUpCase}
          />
        </div>
      </div>
    </nav>
  );
}
