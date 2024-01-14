"use client";
import HorizontallyItem from "@/Components/HorizontallyItem/HorizontallyItem";
import Navbar from "@/Components/common/Navbar/Navbar";
import DiscoverSection from "@/Components/DiscoverSection/DiscoverSection";
import { useSelector } from "react-redux";

export default function Home() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className={`${theme !== "dark" ? "dark" : ""} h-full w-full`}>
      <div className="dark:bg-gray-900">
        <Navbar />
        <DiscoverSection />
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 dark:bg-gray-900">
          <div className="flex flex-col">
            <HorizontallyItem urlStatus={"day"} status={"movie"} />
            <HorizontallyItem urlStatus={"day"} status={"tv"} />
            <HorizontallyItem urlStatus={"week"} status={"movie"} />
            <HorizontallyItem urlStatus={"week"} status={"tv"} />
          </div>
        </div>
      </div>
    </div>
  );
}
