"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUrlTheMovieDb } from "@/utils/apiService";

export default function CountryItem({ handleCountryChange }) {
  const [country, setCountry] = useState("");
  const languageLoCase = useSelector(
    (state) => state.languageSetting.languageLoCase
  );
  const languageUpCase = useSelector(
    (state) => state.languageSetting.languageUpCase
  );

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/watch/providers/regions`;
    const fetchData = async () => {
      try {
        const trendingMovies = await fetchUrlTheMovieDb(url);
        setCountry(trendingMovies.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const countryList = () => {
    if (Array.isArray(country)) {
      return country.map((item) => (
        <option
          defaultValue={
            item.iso_3166_1 === languageUpCase ? item.iso_3166_1 : null
          }
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
      className="border border-gray-300 text-sm rounded-md block w-40 p-2">
      {countryList()}
    </select>
  );
}
