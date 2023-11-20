"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function CountryItem({ handleCountryChange }) {
  const [country, setCountry] = useState("TR");
  const languageSetting = useSelector(
    (state) => state.languagesSetting.language
  );

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/watch/providers/regions?language=${languageSetting.toLowerCase()}-${languageSetting.toUpperCase()}`,
      headers: {
        accept: "application/json",
        Authorization: process.env.API_KEY,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setCountry(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [languageSetting]);

  const countryList = () => {
    // Check if country is an array before using map
    if (Array.isArray(country)) {
      return country.map((item) => (
        <option key={item.iso_3166_1} value={item.iso_3166_1}>
          {item.native_name}
        </option>
      ));
    } else {
      // Handle the case where country is not an array
      return null; // or return an empty array or appropriate default value
    }
  };
  return (
    <select
      onChange={handleCountryChange}
      id="countries"
      className="border border-gray-300 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
      {countryList()}
    </select>
  );
}
