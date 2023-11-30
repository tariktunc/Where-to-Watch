"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/Components/Navbar/Navbar";
import HorizantalItem from "@/Components/Items/HorizantalItem/HorizontalItem";
// import Footer from "@/Components/Footer/Footer";
// import Popular from "@/Components/Items/Popular/Popular";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl">Movie Day</h1>
        <HorizantalItem urlStatus={"day"} status={"movie"} />
        {/* <Popular /> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}
