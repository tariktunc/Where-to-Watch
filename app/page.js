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
      <HorizantalItem urlStatus={"day"} status={"movie"} />
    </div>
  );
}
