"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setCountry } from "@/stores/Slices/whereToWatchCountrySlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleRight,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

import Image from "next/image";
import Country from "@/Components/Country/Country";

export default function WhereToWatch() {
  const [isOpen, setIsOpen] = useState(true);
  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="m-4">
      <div className="w-[300px] shadow shadow-gray-600/50 rounded-md">
        {isOpen ? (
          <>
            <OpenItem handleClick={handleClick} />
            <CountryItem />
            <MultiSelecet />
          </>
        ) : (
          <>
            <CloseItem handleClick={handleClick} />
          </>
        )}
      </div>
    </div>
  );
}

function CloseItem({ handleClick }) {
  return (
    <div
      onClick={handleClick}
      className="h-[40px]  flex justify-center items-center cursor-pointer ">
      <p className="m-1 p-1 font-bold">Where To Watch</p>
      <FontAwesomeIcon icon={faAngleRight} />
    </div>
  );
}

function OpenItem({ handleClick }) {
  return (
    <div
      onClick={handleClick}
      className="h-[40px] border-b-2 border-gray-300 flex justify-center items-center cursor-pointer ">
      <p className="m-1 p-1 font-bold">Where To Watch</p>
      <FontAwesomeIcon icon={faAngleDown} />
    </div>
  );
}

function CountryItem() {
  const dispatch = useDispatch();
  const countrySetting = useSelector(
    (state) => state.whereToWatchSetting.country
  );
  const handleChange = (e) => {
    dispatch(setCountry(e.target.value));
  };
  return (
    <div className="w-[auto] m-2 p-2 flex  flex-col ">
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 ">
        Country: {countrySetting}
      </label>
      <Country handleCountryChange={handleChange} selected={countrySetting} />
    </div>
  );
}

function MultiSelecet() {
  const [channelImage, setChannelImage] = useState([]);
  const countrySetting = useSelector(
    (state) => state.whereToWatchSetting.country
  );
  const languageSetting = useSelector(
    (state) => state.languageSetting.language
  );
  const imageUrl = "https://image.tmdb.org/t/p/w500/";

  const language = () => {
    let newLanguage = languageSetting;

    let result = [];
    if (newLanguage !== undefined && newLanguage !== null) {
      result.push(newLanguage.toLowerCase() + "-" + newLanguage);
    }

    return result;
  };

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/watch/providers/movie?language=${language()}&watch_region=${countrySetting}`,
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY,
    },
  };

  const getTrendingMovie = async () => {
    const response = await axios.request(options);
    const data = await response.data;
    setChannelImage(data.results);
  };

  useEffect(() => {
    getTrendingMovie();
  }, [countrySetting, languageSetting]);

  return (
    <div>
      <ul className="grid grid-cols-4 mx-5 pb-5 ">
        {channelImage.map((item) => (
          <li
            key={item.provider_id}
            className="m-1 w-12 h-12 rounded-md shadow shadow-blue-800/30 flex justify-center items-center cursor-pointer ">
            <div className="rounded-sm relative flex justify-center items-center bg-blue-300">
              <div className="absolute rounded-sm" style={{ zIndex: 0 }}>
                <FontAwesomeIcon icon={faCheck} className="text-blue" />
              </div>
              <div className="hover:opacity-20" style={{ zIndex: 1 }}>
                <Image
                  width={100}
                  height={100}
                  sizes={"100vw"}
                  src={imageUrl + item.logo_path}
                  alt={item.provider_name}
                  className="rounded-sm "
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
