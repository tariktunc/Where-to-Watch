"use client";
import React, { useEffect } from "react";
import Error from "@/Components/common/Error/Error";
import Loading from "@/Components/common/Loading/Loading";
import Navbar from "@/Components/common/Navbar/Navbar";
import { useSelector } from "react-redux";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

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
      <ErrorBoundary fallback={<Error />}>
        <React.Suspense fallback={<Loading />}>
          <Error page={params.slug} />
        </React.Suspense>
      </ErrorBoundary>
    </>
  );
}
