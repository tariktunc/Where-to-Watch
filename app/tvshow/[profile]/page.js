"use client";
import React, { use } from "react";
import Error from "@/Components/common/Error/Error";
import FilteredListPage from "@/Components/FilteredList/FilteredListPage";
import MovieProfile from "@/Components/MovieProfile/MovieProfile";

export default function Page({ params }) {
  const { profile } = use(params);

  const renderContent = () => {
    switch (profile) {
      case "popular":
        return <FilteredListPage status={"tv"} lists={"popular"} />;
      case "airing_today":
        return <FilteredListPage status={"tv"} lists={"airing_today"} />;
      case "on_the_air":
        return <FilteredListPage status={"tv"} lists={"on_the_air"} />;
      case "top_rated":
        return <FilteredListPage status={"tv"} lists={"top_rated"} />;
      default:
        const profileNumber = parseInt(profile);
        if (
          !isNaN(profileNumber) &&
          profileNumber >= 1 &&
          profileNumber <= 2147483647
        ) {
          return <MovieProfile status={"tv"} params={profileNumber} />;
        } else {
          return <Error page={profile} />;
        }
    }
  };

  return <>{renderContent()}</>;
}
