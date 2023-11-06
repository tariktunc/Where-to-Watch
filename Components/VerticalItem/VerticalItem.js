"use client";
import React, { useState, useEffect, useMemo } from "react";
import ItemCard from "./ItemCard";

export default function Home({ urlId }) {
    const [imageUrl, setImageUrl] = useState(
        "https://image.tmdb.org/t/p/w500/"
    );
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const url = urlId;
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmM3ZjA5NzYwMDczZWVjZjFhY2Y2MWI1MmQxYmRhYyIsInN1YiI6IjY0N2YyYWVlMGUyOWEyMmJlMzI4ODQyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G74i4A-82vbKiB00myx0hSL5GGLPdcLO6yWFv_RIgg4",
            },
        };

        fetch(url, options)
            .then((res) => res.json())
            .then((json) => setMovies(json.results))
            .catch((err) => console.error("error:" + err));
    }, []);

    return (
        <div className="flex flex-wrap max-w-screen-lg ">
            {movies.map((movie) => (
                <div key={movie.id}>
                    <ItemCard
                        itemKey={movie.id}
                        imageWidth="w-[170px]"
                        url={imageUrl + movie.poster_path}
                        altName={movie.id}
                        rating={movie.vote_average}
                        titleName={
                            movie.title === undefined ? movie.name : movie.title
                        }
                        year={
                            movie.release_date === undefined
                                ? movie.first_air_date
                                : movie.release_date
                        }
                    />
                </div>
            ))}
        </div>
    );
}
