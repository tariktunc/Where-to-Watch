"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import HorizantalItem from "@/Components/HorizantalItem/HorizontalItem";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl">Movie Day</h1>
        <HorizantalItem urlStatus={"day"} />
        <h1 className="text-3xl">Movie Week</h1>
        <HorizantalItem urlStatus={"week"} />
        <h1 className="text-3xl">TV Day</h1>
        <HorizantalItem urlStatus={"day"} />
        <h1 className="text-3xl">TV Week</h1>
        <HorizantalItem urlStatus={"week"} />
        <Footer />
      </div>
    </div>
  );
}
