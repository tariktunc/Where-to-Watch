import Image from "next/image";
import Rating from "../common/Rating/rating";

export default function Item(props) {
  return (
    <div className="w-[200px] h-[450px] bg-white m-3 rounded-md shadow-lg shadow-white drop-shadow-md ">
      <Image
        className="rounded-t-md"
        src="https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
        width={1000}
        height={1000}
        alt="altt"
      />
      <div className="p-2">
        <Rating rating={5} w="w-[20px]" h="h-[20px]" />
      </div>
      <div className="p-2">
        <h2 className="font-bold break-words">
          Star Trek: The Next Generation
        </h2>
        <p className="text-sm opacity-90 mt-1">2023.25.12</p>
      </div>
    </div>
  );
}
