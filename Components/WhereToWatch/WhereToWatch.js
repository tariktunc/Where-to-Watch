"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleDown,
    faAngleRight,
    faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

// Bu kisim fontawesome icin acilista kucuk olmasini saglar.
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function WhereToWatch() {
    const [isOpen, setIsOpen] = useState(true);
    const [country, setCountry] = useState("TR");
    function handleClick() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="m-4">
            <div className="w-[300px] shadow shadow-gray-600/50 rounded-md">
                {isOpen ? (
                    <>
                        <OpenItem handleClick={handleClick} />
                        {/* CountryItem Props ozelligi ile veri cekilecek */}
                        <CountryItem />
                        <MultiSelecet country={country} />
                    </>
                ) : (
                    <>
                        <CloseItem handleClick={handleClick} />
                    </>
                )}
            </div>
        </div>
    );
}

function CloseItem({ handleClick }) {
    return (
        <div
            onClick={handleClick}
            className="h-[40px]  flex justify-center items-center cursor-pointer ">
            <p className="m-1 p-1 font-bold">Where To Watch</p>
            <FontAwesomeIcon icon={faAngleRight} />
        </div>
    );
}

function OpenItem({ handleClick }) {
    return (
        <div
            onClick={handleClick}
            className="h-[40px] border-b-2 border-gray-300 flex justify-center items-center cursor-pointer ">
            <p className="m-1 p-1 font-bold">Where To Watch</p>
            <FontAwesomeIcon icon={faAngleDown} />
        </div>
    );
}

function CountryItem({ setCountry }) {
    const handleChange = (e) => {
        console.log(e.target.value);
        setCountry = e.target.value;
    };
    return (
        <div className="">
            <div className="w-[auto] m-2 p-2 flex  flex-col ">
                <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 text-black">
                    Country
                </label>
                <select
                    onChange={handleChange}
                    id="countries"
                    defaultValue="TR"
                    className="border border-gray-300 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value={"TR"}>Turkiye</option>
                    <option value={"EN"}>United States</option>
                    <option value={"DE"}>Germany</option>
                </select>
            </div>
        </div>
    );
}

function MultiSelecet({ country }) {
    const [channelImage, setChannelImage] = useState([]);
    const imageUrl = "https://image.tmdb.org/t/p/w500/";

    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmM3ZjA5NzYwMDczZWVjZjFhY2Y2MWI1MmQxYmRhYyIsInN1YiI6IjY0N2YyYWVlMGUyOWEyMmJlMzI4ODQyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G74i4A-82vbKiB00myx0hSL5GGLPdcLO6yWFv_RIgg4",
            },
        };

        fetch(
            `https://api.themoviedb.org/3/watch/providers/movie?language=tr-TR&watch_region=${country}`,
            options
        )
            .then((response) => response.json())
            .then((response) => setChannelImage(response.results))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <ul className="grid grid-cols-4 mx-5 pb-5 ">
                {channelImage.map((item) => (
                    <li
                        key={item.provider_id}
                        className="m-1 w-12 h-12 rounded-md shadow shadow-blue-800/30 flex justify-center items-center cursor-pointer ">
                        <div className="rounded-sm relative flex justify-center items-center bg-blue-300">
                            <div
                                className="absolute rounded-sm"
                                style={{ zIndex: 0 }}>
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className="text-blue"
                                />
                            </div>
                            <div
                                className="hover:opacity-20"
                                style={{ zIndex: 1 }}>
                                <Image
                                    width={100}
                                    height={100}
                                    sizes={"100vw"}
                                    src={imageUrl + item.logo_path}
                                    alt={item.provider_name}
                                    className="rounded-sm hover:opacity-90"
                                />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
