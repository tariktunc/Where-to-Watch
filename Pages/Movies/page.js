"use client";
import VerticalItem from "@/Components/Items/VerticalItem/VerticalItem";
import WhereToWatch from "@/Components/Items/WhereToWatch/WhereToWatch";
import React from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#00050d" : "#fff",
        color: theme === "dark" ? "#fff" : "#00050d",
      }}
      className="flex justify-center">
      <WhereToWatch />
      <VerticalItem urlStatus={"day"} status={"movie"} />
    </div>
  );
}
