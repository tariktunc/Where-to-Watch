import Navbar from "@/Components/common/Navbar/Navbar";
import Image from "next/image";
import styles from "./style.module.css";

export const metadata = {
  title: "Search",
  description: "Movie Description",
};

export default function Home() {
  const text =
    "Against his father Odins will, The Mighty Thor  a powerful butarrogant warrior god  recklessly reignites an ancient war. Thor is cast down to Earth and forced to live among humans as metin bitti.";

  return (
    <>
      <Navbar />
      <section className="flex flex-col justify-center items-center bg-gray-900 ">
        <div className="flex min-w-[500px] max-w-[800px] max-h-[200px] bg-purple-900">
          <div className="bg-green-500 h-[141px] min-w-[94px] w-[94px]">
            <Image
              className="rounded-l-md cursor-pointer "
              width={100}
              height={100}
              alt="alt"
              src={
                "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg"
              }
            />
          </div>
          <div
            className={`bg-blue-500 w-full px-2 py-4 ${styles.customMaxWidth}`}>
            <h2 className="font-bold">Title Name</h2>
            <p className="opacity-50">Date</p>
            <p className="text-sm">{text.substring(0, 300)}</p>
          </div>
        </div>
      </section>
    </>
  );
}
