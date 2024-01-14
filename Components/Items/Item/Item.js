import Image from "next/image";
import Rating from "@/Components/common/Rating/rating";
import Link from "next/link";

export default function Item(props) {
  return (
    <div className="max-w-sm bg-white border h-[500px] m-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Image
        onClick={props.onClick}
        className="rounded-t-lg h-[300px] cursor-pointer"
        src={
          props.imageUrl ||
          "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
        }
        width={1000}
        height={1000}
        alt={props.altName}
      />
      <div className="p-5">
        <Rating rating={props.rating} w="w-[20px]" h="h-[20px]" />
        <h5 className="my-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {props.release}
        </p>
      </div>
    </div>
  );
}
