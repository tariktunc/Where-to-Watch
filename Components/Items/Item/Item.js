import Image from "next/image";
import Rating from "@/Components/common/Rating/rating";

export default function Item(props) {
  return (
    <div className="m-2 bg-white border border-gray-200 rounded-md shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <Image
        onClick={() => props.onClick()}
        className=" w-40 md:w-44 lg:w-52 h-38 md:h-72 lg:h-80"
        width={100}
        height={100}
        alt={props.title}
        src={
          props.src !== null
            ? `https://www.themoviedb.org/t/p/w500${props.src}`
            : "/placeholder-image.svg"
        }
        lazy
      />
      <div className="p-5 w-40 md:w-44 lg:w-52 h-36 md:h-40 lg:h-44">
        <Rating rating={props.rating} w="w-[20px]" h="h-[20px]" />
        <h5 className="my-2 text-xs md:text-base lg:text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          {props.name}
        </h5>
        <p className="font-normal text-xs md:text-base lg:text-lg text-gray-700 dark:text-gray-400">
          {props.release}
        </p>
      </div>
    </div>
  );
}
