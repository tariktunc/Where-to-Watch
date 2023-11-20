import React from "react";
import Image from "next/image";
import Rating from "@/Components/Assets/Rating/rating";

export default function ItemCard({
  url,
  altName,
  rating,
  titleName,
  year,
  imageWidth,
}) {
  return (
    <div
      className={`m-4 ${imageWidth} h-[full] bg-white shadow shadow-gray-600/30 rounded-md`}>
      <Image
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }} // optional
        className="rounded-t-lg"
        src={url !== null && url !== undefined ? url : ""}
        alt={altName !== null && altName !== undefined ? altName : ""}
      />
      <div className={`p-2 h-[120px]`}>
        <Rating rating={rating} />
        <p className={`text-sm pt-2 font-bold`}>{titleName.substring(0, 40)}</p>
        <p className={`text-sm pt-2 opacity-70`}>{year}</p>
      </div>
    </div>
  );
}
