"use client";
import React, { useState, useEffect, useMemo } from "react";
import ItemCard from "./ItemCard";

export default function Home({ urlId, altName }) {
    const [imageUrl, setImageUrl] = useState(
        "https://image.tmdb.org/t/p/w500/"
    );
    const [movies, setMovies] = useState([]);
    const [count, setCount] = useState({ prev: 0, current: 5 });

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

    const handleClick = (e) => {
        if (e.target.id === "prev") {
            if (count.prev > 0) {
                setCount({
                    prev: (count.prev -= 1),
                    current: (count.current -= 1),
                });
            }
        }
        if (e.target.id === "next") {
            if (count.current < movies.length) {
                setCount({
                    prev: (count.prev += 1),
                    current: (count.current += 1),
                });
            }
        }
    };

    return (
        <div className="flex flex-col justify-center items-center my-10 px-10">
            <div className="grid grid-cols-5">
                {movies.slice(count.prev, count.current).map((movie) => (
                    <div
                        key={movie.id}
                        className="transition-all duration-300 ease-in-out transform hover:scale-125">
                        <ItemCard
                            itemKey={movie.id}
                            imageWidth="w-[150px]"
                            url={imageUrl + movie.poster_path}
                            altName={movie.id}
                            rating={movie.vote_average}
                            titleName={
                                movie.title === undefined
                                    ? movie.name
                                    : movie.title
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
            <div className="flex justify-center">
                <button
                    id={"prev"}
                    onClick={handleClick}
                    className="transition-all duration-300 ease-in-out bg-blue-500 hover:bg-blue-700 text-white font-bold mx-5 py-3 px-10 rounded">
                    Prev
                </button>
                <button
                    id={"next"}
                    onClick={handleClick}
                    className="transition-all duration-300 ease-in-out bg-blue-500 hover:bg-blue-700 text-white font-bold mx-5 py-3 px-10 rounded">
                    Next
                </button>
            </div>
        </div>
    );
}
