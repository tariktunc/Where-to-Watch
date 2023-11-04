import React from "react";
import Link from "next/link";

export default function Navbar() {
    const buttonUrl = [
        {
            name: "Home",
            id: "home",
            url: "/",
        },
        {
            name: "Movie",
            id: "movie",
            url: "/movie",
        },
        {
            name: "Tv",
            id: "tv",
            url: "/tv",
        },
    ];
    return (
        <div className="bg-[#221F1F] w-full h-14 flex items-center">
            {/* Logo */}
            <div className="text-white text-3xl w-full">LOGO</div>

            {/* Buttons */}
            <div className="flex justify-center items-center h-full w-full">
                {buttonUrl.map((item) => {
                    return (
                        <div
                            className=" w-full h-full items-center justify-center flex m-1"
                            key={item.id}>
                            <Link
                                className="w-full h-full items-center justify-center flex text-white text-md hover:opacity-50"
                                href={item.url}>
                                {item.name}
                            </Link>
                        </div>
                    );
                })}
            </div>

            {/* Search Bar */}
            <div className="text-white text-md pr-5 flex justify-end w-full ">
                Language
            </div>
        </div>
    );
}
