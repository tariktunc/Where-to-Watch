"use client";
import React, { useEffect } from "react";
import Error from "@/Components/common/Error/page";
import Navbar from "@/Components/common/Navbar/Navbar";
import { useSelector } from "react-redux";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Loading from "../search/Components/Loading";

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
      <ErrorBoundary fallback={<Loading />}>
        <React.Suspense fallback={<Loading />}>
          <Error page={params.slug} />
        </React.Suspense>
      </ErrorBoundary>
    </>
  );
}
