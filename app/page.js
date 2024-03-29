"use client";
import React, { useEffect } from "react";

import HorizontallyItem from "@/Components/HorizontallyItem/HorizontallyItem";
import Navbar from "@/Components/common/Navbar/Navbar";
import DiscoverSection from "@/Components/DiscoverSection/DiscoverSection";
import { useSelector } from "react-redux";

export default function Home() {
  const theme = useSelector((state) => state.theme.theme);
  useEffect(() => {
    if (theme === "dark") {
      return document.body.classList.add("dark", "bg-gray-900");
    } else {
      return document.body.classList.remove("dark", "bg-gray-900");
    }
  }, [theme]);
  return (
    <>
      <Navbar />
      <DiscoverSection />
      <div className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md flex flex-wrap items-center justify-between mx-auto p-4 dark:bg-gray-900">
        <div className="flex flex-col">
          <HorizontallyItem urlStatus={"day"} status={"movie"} />
          <HorizontallyItem urlStatus={"day"} status={"tv"} />
          <HorizontallyItem urlStatus={"week"} status={"movie"} />
          <HorizontallyItem urlStatus={"week"} status={"tv"} />
        </div>
      </div>
    </>
  );
}
