"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleDown,
    faAngleRight,
    faCheck,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { setCountry } from "@/stores/Slices/whereToWatchLanguageSlice";
import Country from "@/Components/Country/Country";

export default function WhereToWatch() {
    const [isOpen, setIsOpen] = useState(true);
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
                        <MultiSelecet />
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

function CountryItem() {
    const dispatch = useDispatch();
    const handleChange = (e) => {
        dispatch(setCountry(e.target.value));
    };
    return (
        <div className="w-[auto] m-2 p-2 flex  flex-col ">
            <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 text-black">
                Country
            </label>
            <Country handleCountryChange={handleChange} />
        </div>
    );
}

function MultiSelecet() {
    const [channelImage, setChannelImage] = useState([]);
    const language = useSelector((state) => state.whereToWatchSetting.language);
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

        async function fetchData() {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/watch/providers/regions?language=${language.lowerCase()}-${language.toUpperCase()}`,
                    options
                );
                const data = await response.json();
                console.log(data.results);
                setChannelImage(data.results);
            } catch (err) {
                console.error(err);
            }
        }

        fetchData();
    }, [language]);

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
