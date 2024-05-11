import Image from "next/image";
import Rating from "@/Components/common/Rating/rating";

export default function Item(props) {
  return (
    <div className="m-2 bg-white border border-gray-200 rounded-md shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className="w-40 md:w-44 lg:w-52 h-38 md:h-72 lg:h-80">
        <Image
          onClick={() => props.onClick()}
          className="w-full h-full cursor-pointer"
          width={1000}
          height={1000}
          alt={props.title}
          src={
            props.src !== null
              ? `https://www.themoviedb.org/t/p/w500${props.src}`
              : "/placeholder-image.svg"
          }
          lazy
        />
      </div>
      <div className="p-5 w-40 md:w-44 lg:w-52 h-20 md:h-20 lg:h-20">
        <Rating rating={props.rating} w="w-[20px]" h="h-[20px]" />
        <h5 className="my-2  h-auto w-auto text-xs md:text-base lg:text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          {props.name}
        </h5>
        <p className="font-normal h-auto w-auto  text-xs md:text-base lg:text-lg text-gray-700 dark:text-gray-400">
          {props.release}
        </p>
      </div>
    </div>
  );
}
