import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function Item({
  url,
  urlStatus,
  altName,
  imageWidth,
  children,
}) {
  const router = useRouter();
  const theme = useSelector((state) => state.theme.theme);

  const handleClick = () => {
    router.push(`${urlStatus}/${altName}`);
  };
  const mainStyles = `m-4 ${imageWidth} h-[full] bg-white shadow shadow-gray-600/30 rounded-xl`;
  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#00050d" : "#fff",
        color: theme === "dark" ? "#fff" : "#00050d",
      }}
      className={mainStyles}>
      <Image
        onClick={handleClick}
        width={100}
        height={100}
        sizes="100vw"
        style={{ width: "100%", height: "100%" }} // optional
        className="rounded-t-md cursor-pointer"
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
