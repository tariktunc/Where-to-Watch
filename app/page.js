"use client";
import React, { useState } from "react";
import Navbar from "@/Components/Navbar/Navbar";
import HorizontallyItem from "@/Components/Items/HorizontallyItem/HorizontallyItem";
import DiscoverSection from "@/Components/DiscoverSection/DiscoverSection";
import { useSelector } from "react-redux";

export default function Home() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <>
      <Navbar />
      <DiscoverSection />
      <div
        style={{
          backgroundColor: theme === "dark" ? "#00050d" : "#fff",
          color: theme === "dark" ? "#fff" : "#00050d",
        }}
        className="flex flex-col items-center">
        <HorizontallyItem urlStatus={"day"} status={"movie"} />
        <HorizontallyItem urlStatus={"day"} status={"tv"} />
        <HorizontallyItem urlStatus={"week"} status={"movie"} />
        <HorizontallyItem urlStatus={"week"} status={"tv"} />
      </div>
    </>
  );
}
