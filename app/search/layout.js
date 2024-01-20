"use client";
import React, { useEffect } from "react";
import Navbar from "@/Components/common/Navbar/Navbar";
import { useSelector } from "react-redux";
import Loading from "../search/Components/Loading";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

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
    <ErrorBoundary fallback={<Error />}>
      <Navbar />
      {children}
    </ErrorBoundary>
  );
}
