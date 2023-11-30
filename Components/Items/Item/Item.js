import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Item({
  url,
  urlStatus,
  altName,
  imageWidth,
  children,
}) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`${urlStatus}/${altName}`);
  };
  const mainStyles = `m-4 ${imageWidth} h-[full] bg-white shadow shadow-gray-600/30 rounded-md`;
  return (
    <div className={mainStyles}>
      <Image
        onClick={handleClick}
        width={100}
        height={100}
        sizes="100vw"
        style={{ width: "100%", height: "100%" }} // optional
        className="rounded-t-lg cursor-pointer"
        src={
          url !== null && url !== undefined
            ? url
            : "https://loading.io/asset/705446"
        }
        alt={altName}
      />
      {children}
    </div>
  );
}
