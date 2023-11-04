"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import HorizantalItem from "@/Components/HorizantalItem/HorizantalItem";

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center ">
                <HorizantalItem
                    urlId={
                        "https://api.themoviedb.org/3/trending/movie/day?language=tr-TR"
                    }
                />
            </div>
            <Footer />
        </div>
    );
}
