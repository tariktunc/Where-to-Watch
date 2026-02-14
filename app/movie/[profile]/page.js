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
        return <FilteredListPage status={"movie"} lists={"popular"} />;
      case "now_playing":
        return <FilteredListPage status={"movie"} lists={"now_playing"} />;
      case "upcoming":
        return <FilteredListPage status={"movie"} lists={"upcoming"} />;
      case "top_rated":
        return <FilteredListPage status={"movie"} lists={"top_rated"} />;
      default:
        const profileNumber = parseInt(profile);
        if (
          !isNaN(profileNumber) &&
          profileNumber >= 1 &&
          profileNumber <= 2147483647
        ) {
          return <MovieProfile status={"movie"} params={profileNumber} />;
        } else {
          return <Error page={profile} />;
        }
    }
  };

  return <>{renderContent()}</>;
}
