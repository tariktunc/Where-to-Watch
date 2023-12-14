"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUrlTheMovieDb } from "@/utils/apiService";

export default function CountryItem({ handleCountryChange, selected }) {
  const [country, setCountry] = useState("");
  const languageLoCase = useSelector(
    (state) => state.languageSetting.languageLoCase
  );
  const languageUpCase = useSelector(
    (state) => state.languageSetting.languageUpCase
  );

  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/watch/providers/regions?language=${languageLoCase}-${languageUpCase}`;
    const fetchData = async () => {
      try {
        const trendingMovies = await fetchUrlTheMovieDb(url);
        setCountry(trendingMovies.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [languageLoCase, languageUpCase]);

  const countryList = () => {
    if (Array.isArray(country)) {
      return country.map((item) => (
        <option
          style={{
            backgroundColor: theme === "dark" ? "#00050d" : "#fff",
            color: theme === "dark" ? "#fff" : "#00050d",
          }}
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
      style={{
        backgroundColor: theme === "dark" ? "#00050d" : "#fff",
        color: theme === "dark" ? "#fff" : "#00050d",
      }}
      onChange={handleCountryChange}
      className="border border-gray-300 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-40 p-2">
      {countryList()}
    </select>
  );
}
