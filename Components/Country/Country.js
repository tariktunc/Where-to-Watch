"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function CountryItem({ handleCountryChange }) {
  const [country, setCountry] = useState("TR");
  const languageSetting = useSelector(
    (state) => state.languageSetting.language
  );
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/watch/providers/regions?language=${languageSetting.toLowerCase()}-${languageSetting.toUpperCase()}`,
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY,
    },
  };

  const getTrendingMovie = async () => {
    const response = await axios.request(options);
    const data = await response.data;
    setCountry(data.results);
  };
  useEffect(() => {
    getTrendingMovie();
  }, [languageSetting]);

  const countryList = () => {
    if (Array.isArray(country)) {
      return country.map((item) => (
        <option key={item.iso_3166_1} value={item.iso_3166_1}>
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
      id="countries"
      className="border border-gray-300 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-40 p-2 ">
      {countryList()}
    </select>
  );
}
