"use client";
import React, { use, useEffect } from "react";
import Error from "@/Components/common/Error/Error";
import Navbar from "@/Components/common/Navbar/Navbar";
import { useSelector } from "react-redux";

export default function Page({ params }) {
  const { slug } = use(params);
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <Navbar />
      <Error page={slug} />
    </>
  );
}
