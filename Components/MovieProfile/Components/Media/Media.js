"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Media() {
  return (
    <div className="flex flex-col justify-center items-center">
      <ImageGallery />
    </div>
  );
}

const ImageGallery = () => {
  return (
    <div className="flex justify-start items-center pb-5 w-[1200px] min-w-[500px] max-w-[1200px] overflow-x-auto">
      <Image
        width={400}
        height={160}
        src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/mtvGAsY45DiPIvyppwzkIT8Sx1K.jpg"
        alt="Image 1"
      />
      <Image
        width={400}
        height={160}
        src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/mtvGAsY45DiPIvyppwzkIT8Sx1K.jpg"
        alt="Image 1"
      />
      <Image
        width={400}
        height={160}
        src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/mtvGAsY45DiPIvyppwzkIT8Sx1K.jpg"
        alt="Image 1"
      />
      <Image
        width={400}
        height={160}
        src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/mtvGAsY45DiPIvyppwzkIT8Sx1K.jpg"
        alt="Image 1"
      />
      <Image
        width={400}
        height={160}
        src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/mtvGAsY45DiPIvyppwzkIT8Sx1K.jpg"
        alt="Image 1"
      />
    </div>
  );
};
