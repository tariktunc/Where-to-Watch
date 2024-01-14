"use client";
import React, { useEffect } from "react";
import Error from "@/Components/common/Error/page";
import Navbar from "@/Components/common/Navbar/Navbar";
import { useSelector } from "react-redux";

export default function Page({ params }) {
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
      <div className="w-full h-full flex justify-center items-center">
        <Error page={params.slug} />
      </div>
    </>
  );
}
