import Image from "next/image";
import Rating from "@/Components/common/Rating/rating";
export default function Home(props) {
  const loadingItem = [];
  for (let i = 0; i < 20; i++) {
    loadingItem.push(
      <div
        key={i}
        className="m-2 bg-white border border-gray-200 rounded-md shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="w-40 md:w-44 lg:w-52 h-38 md:h-72 lg:h-80">
          <Image
            className="w-full h-full"
            width={100}
            height={100}
            alt="title"
            src="/placeholder-image.svg"
            lazy
          />
        </div>
        <div className="p-5 w-40 md:w-44 lg:w-52 h-36 md:h-40 lg:h-52 ">
          <Rating rating={0} w="w-[20px]" h="h-[20px]" />
          <h5 className="my-2 opacity-10 h-auto w-auto text-xs md:text-base lg:text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            Name
          </h5>
          <p className="font-normal opacity-10 h-auto w-auto  text-xs md:text-base lg:text-lg text-gray-700 dark:text-gray-400">
            release
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-wrap justify-center items-center min-w-screen-xs max-w-screen-lg">
      {loadingItem}
    </div>
  );
}
