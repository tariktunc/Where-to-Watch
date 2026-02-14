"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Loading from "../search/Components/Loading";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

import Navbar from "@/Components/common/Navbar/Navbar";
export default function Home({ children }) {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    if (theme === "dark") {
      return document.body.classList.add("dark");
    } else {
      return document.body.classList.remove("dark");
    }
  }, [theme]);
  return (
    <>
      <Navbar />
      <main className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md flex items-center justify-center mx-auto p-4">
        {children}
      </main>
    </>
  );
}
