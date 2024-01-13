"use client";
import Error from "@/Components/common/Error/page";
import Navbar from "@/Components/common/Navbar/Navbar";
import { useSelector } from "react-redux";

export default function Page({ params }) {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className={`${theme !== "dark" ? "dark" : ""}`}>
      <div style={{ height: "100vh" }} className="dark:bg-gray-900">
        <Navbar />
        <div className="w-full h-full flex justify-center items-center">
          <Error page={params.slug} />
        </div>
      </div>
    </div>
  );
}
