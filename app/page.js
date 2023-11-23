"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
// import HorizantalItem from "@/Components/Items/HorizantalItem/HorizontalItem";
import Popular from "@/Components/Items/Popular/Popular";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl">Movie Day</h1>
        {/* <HorizantalItem urlStatus={"day"} /> */}
        <Popular />
        <Footer />
      </div>
    </div>
  );
}
