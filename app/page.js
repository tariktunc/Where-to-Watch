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
                <HorizantalItem
                    urlId={
                        "https://api.themoviedb.org/3/trending/movie/day?language=tr-TR"
                    }
                />
                <h1 className="text-3xl">Movie Week</h1>
                <HorizantalItem
                    urlId={
                        "https://api.themoviedb.org/3/trending/movie/week?language=en-US"
                    }
                />
                <h1 className="text-3xl">TV Day</h1>
                <HorizantalItem
                    urlId={
                        "https://api.themoviedb.org/3/trending/tv/day?language=zh-ZH"
                    }
                />
                <h1 className="text-3xl">TV Week</h1>
                <HorizantalItem
                    urlId={
                        "https://api.themoviedb.org/3/trending/tv/week?language=zh-ZH"
                    }
                />
                <Footer />
            </div>
        </div>
    );
}
