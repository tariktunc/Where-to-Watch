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
      return document.body.classList.add("dark", "bg-gray-900");
    } else {
      return document.body.classList.remove("dark", "bg-gray-900");
    }
  }, [theme]);
  return (
    <>
      <Navbar />
      <p className="dark:text-white">Person Layout Page</p>
      <ErrorBoundary fallback={<Loading />}>
        <React.Suspense fallback={<Loading />}>{children}</React.Suspense>
      </ErrorBoundary>
    </>
  );
}
