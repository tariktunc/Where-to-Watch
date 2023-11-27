"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function CountryItem({ handleCountryChange, selected }) {
  const [country, setCountry] = useState("");
  const languageSetting = useSelector(
    (state) => state.languageSetting.language
  );

  const language = () => {
    let newLanguage = languageSetting;

    let result = [];
    if (newLanguage !== undefined && newLanguage !== null) {
      result.push(newLanguage.toLowerCase() + "-" + newLanguage);
    }
    return result;
  };

  const API_KEY = process.env.API_KEY;

  useEffect(() => {
    const getTrendingMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/watch/providers/regions?language=${language()}`,
          {
            headers: {
              accept: "application/json",
              Authorization: API_KEY,
            },
          }
        );
        setCountry(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    getTrendingMovie();
  }, [languageSetting, API_KEY]);

  const countryList = () => {
    if (Array.isArray(country)) {
      return country.map((item) => (
        <option
          defaultValue={item.iso_3166_1 === selected ? item.iso_3166_1 : null}
          key={item.iso_3166_1}
          value={item.iso_3166_1}>
          {item.native_name.length > 15
            ? `${item.native_name.slice(0, 15)}...`
            : item.native_name}
        </option>
      ));
    } else {
      return null;
    }
  };

  return (
    <select
      onChange={handleCountryChange}
      className="border border-gray-300 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-40 p-2">
      {countryList()}
    </select>
  );
}
