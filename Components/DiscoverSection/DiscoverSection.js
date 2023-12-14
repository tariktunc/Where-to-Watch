"use client ";
import React from "react";
import { useSelector } from "react-redux";

export default function DiscoverSection() {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <section
      className="w-full flex justify-center items-center"
      style={{
        backgroundColor: theme === "dark" ? "#00050d" : "",
        color: theme === "dark" ? "#fff" : "#00050d",
      }}>
      <div
        className="w-[1200px]"
        style={{
          backgroundImage:
            "url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/wVJG3u5Ru9tInxYiTCrJr4MpJ7Z.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          className="h-[500px] flex flex-col justify-center items-center">
          <div id="discoverTitle" className="max-w-[1200px] text-white">
            <h3 className="my-2 mx-1 font-bold text-7xl">Welcome.</h3>
            <h2 className="my-2 mx-1 font-bold text-2xl">
              Millions of movies, TV shows and people to discover. Explore now.
            </h2>
          </div>
          <div id="discoverSearch" className=" w-3/4">
            <label className="bg-white rounded-3xl flex">
              <input
                type="text"
                placeholder="Search for a movie, tv show, coming soon person"
                className="h-14  rounded-3xl w-full text-black text-opacity-60 px-5 "
              />
              <button className="w-40 h-14 rounded-3xl bg-[#00050d] hover:bg-[#00050de1] text-white ">
                Search
              </button>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
