"use client";
import React, { useEffect } from "react";
import Navbar from "@/Components/common/Navbar/Navbar";
import Footer from "@/Components/common/Footer/Footer";
import { useSelector } from "react-redux";
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
      {children}
      <Footer />
    </>
  );
}
