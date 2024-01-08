import Image from "next/image";
import Rating from "@/Components/common/Rating/rating";

export default function Item(props) {
  return (
    <div className="w-[200px] h-[450px] bg-white m-3 rounded-md shadow-lg shadow-gray-200 drop-shadow-md ">
      <Image
        onClick={props.onClick}
        className="rounded-t-md h-[300px]"
        src={
          props.imageUrl ||
          "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
        }
        width={1000}
        height={1000}
        alt={props.altName}
      />
      <div className="p-2">
        <Rating rating={props.rating} w="w-[20px]" h="h-[20px]" />
      </div>
      <div className="p-2">
        <h2 className="font-bold break-words cursor-pointer">{props.name}</h2>
        <p className="text-sm opacity-70 mt-1">{props.release}</p>
      </div>
    </div>
  );
}
