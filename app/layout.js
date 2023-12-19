"use client";
import "@/app/globals.css";
import { Rubik } from "next/font/google";
import { Provider } from "react-redux";
import stores from "@/stores/stores";

const fontName = Rubik({ weight: "300", subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <Provider store={stores}>
      <html lang="en" className={fontName.className}>
        <body>{children}</body>
      </html>
    </Provider>
  );
}
