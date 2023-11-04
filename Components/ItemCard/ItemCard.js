import React from "react";
import Image from "next/image";

const cardStyles = {
    ratingSize: "w-3 h-3",
    yearSize: "text-sm",
    titleSize: "text-sm",
    containerHeight: "h-[110px]",
};

export default function ItemCard({
    url,
    altName,
    rating,
    titleName,
    year,
    sizes,
}) {
    const [itemStyle, setItemStyle] = React.useState(cardStyles);
    return (
        <div
            className={`m-4 w-[${sizes}] h-[full] bg-white shadow shadow-gray-600/30 rounded-md`}>
            <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }} // optional
                className="rounded-t-lg"
                src={url !== null && url !== undefined ? url : ""}
                alt={altName !== null && altName !== undefined ? altName : ""}
            />
            <div className={`p-2 ${cardStyles.containerHeight}`}>
                <Rating rating={rating} />
                <p className={`${cardStyles.titleSize} pt-2 font-bold`}>
                    {titleName.substring(0, 40)}
                </p>
                <p className={`${cardStyles.yearSize} pt-2 opacity-70`}>
                    {year}
                </p>
            </div>
        </div>
    );
}

function Rating({ rating }) {
    const newRating = Math.floor(rating / 2);

    switch (newRating) {
        case 0:
            return (
                <div className="flex">
                    <PassifeRating />
                    <PassifeRating />
                    <PassifeRating />
                    <PassifeRating />
                    <PassifeRating />
                </div>
            );
        case 1:
            return (
                <div className="flex">
                    <ActiveRating />
                    <PassifeRating />
                    <PassifeRating />
                    <PassifeRating />
                    <PassifeRating />
                </div>
            );
        case 2:
            return (
                <div className="flex">
                    <ActiveRating />
                    <ActiveRating />
                    <PassifeRating />
                    <PassifeRating />
                    <PassifeRating />
                </div>
            );
        case 3:
            return (
                <div className="flex">
                    <ActiveRating />
                    <ActiveRating />
                    <ActiveRating />
                    <PassifeRating />
                    <PassifeRating />
                </div>
            );
        case 4:
            return (
                <div className="flex">
                    <ActiveRating />
                    <ActiveRating />
                    <ActiveRating />
                    <ActiveRating />
                    <PassifeRating />
                </div>
            );
        case 5:
            return (
                <div className="flex">
                    <ActiveRating />
                    <ActiveRating />
                    <ActiveRating />
                    <ActiveRating />
                    <ActiveRating />
                </div>
            );
        default:
            return (
                <div className="flex">
                    <PassifeRating />
                    <PassifeRating />
                    <PassifeRating />
                    <PassifeRating />
                    <PassifeRating />
                </div>
            );
    }
}

function ActiveRating() {
    return (
        <>
            <svg
                className={`${cardStyles.ratingSize}  text-yellow-300`}
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
        </>
    );
}

function PassifeRating() {
    return (
        <>
            <svg
                className={`${cardStyles.ratingSize} text-gray-300 dark:text-gray-500`}
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
        </>
    );
}
