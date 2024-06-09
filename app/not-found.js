import React from "react";
import Link from "next/link";

export default function Notfound() {
  return (
    <html>
      <body style={{ backgroundColor: "black", color: "white" }}>
        <div className="flex flex-col justify-center items-center h-screen gap-5 ">
          <h2 className="sm:text-sm md:text-5xl">There was a problem.</h2>
          <p className="sm:text-sm md:text-3xl">
            We could not find the page you were looking for. <br /> Go back to
            the
            <Link href="/" className="mx-2 text-orange-400">
              HOME
            </Link>
          </p>
        </div>
      </body>
    </html>
  );
}
