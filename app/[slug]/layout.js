"use client";
import React from "react";
import { useSelector } from "react-redux";
import Navbar from "@/Components/Navbar/Navbar";

export default function RootLayout({ children }) {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className="flex flex-col">
      <Navbar />
      <div
        style={{
          backgroundColor: theme === "dark" ? "#00050d" : "#fff",
          color: theme === "dark" ? "#fff" : "#00050d",
        }}>
        {children}
      </div>
    </div>
  );
}
