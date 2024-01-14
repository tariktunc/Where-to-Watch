"use client";
import Navbar from "@/Components/common/Navbar/Navbar";
import { useSelector } from "react-redux";
export default function Home({ children }) {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className={`${theme !== "dark" ? "dark" : ""}`}>
      <div className="dark:bg-gray-900">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
