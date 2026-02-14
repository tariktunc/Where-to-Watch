"use client";
import React, { useEffect } from "react";
import Navbar from "@/Components/common/Navbar/Navbar";
import Footer from "@/Components/common/Footer/Footer";
import { useSelector } from "react-redux";

export default function SectionLayout({ children, showFooter = true }) {
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
      {children}
      {showFooter && <Footer />}
    </>
  );
}
