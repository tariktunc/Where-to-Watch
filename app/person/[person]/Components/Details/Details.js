import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function details() {
  return (
    <div className="min-w-[700px] col-start-3 col-end-7 b">
      <div id="white_column" className="my-3">
        {/* name */}
        <section id="title">
          <div className="text-sm sm:text-lg md:text-3xl dark:text-white">
            <h2 id="title" className="font-bold">
              <Link href="/">Jacob Elordi</Link>
            </h2>
          </div>
        </section>
        {/* biography */}
        <section id="full_wrapper">
          <div className="dark:text-white">
            <h3 className="font-bold text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl dark:text-white my-2">
              Biyografi
            </h3>
            <p className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl leading-2 ">
               Burası metin alanıdır burada belirli isaretlere dikkat edilmesi gerekilmektedir. Burayı code larken metinlerin ifadelerine lütfen dikkat edin.
            </p>
          </div>
        </section>
        {/* known */}
        <section
          id="full_wrapper"
          className="flex justify-start items-center overflow-x-auto custom-scrollbar h-[250px] md:h-[350px]"
        >
          <div id="known_for">
            <h3 className="font-bold text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl dark:text-white my-2">
              Bilinen Filmler
            </h3>
            <div
              id="known_for_list"
              className="dark:text-white text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 
          "
            >
              <ul className="flex justify-start items-center overflow-x-auto custom-scrollbar">
                <li className="w-40 px-2">
                  <div>
                    <Image
                      className="w-full"
                      width={100}
                      height={100}
                      src="https://media.themoviedb.org/t/p/w150_and_h225_bestv2/f5FtqYnUfI9EdkhEWNLPZReDilJ.jpg"
                      alt="image"
                    />
                  </div>
                </li>
                <li className="w-40 px-2">
                  <div>
                    <Image
                      className="w-full"
                      width={100}
                      height={100}
                      src="https://media.themoviedb.org/t/p/w150_and_h225_bestv2/f5FtqYnUfI9EdkhEWNLPZReDilJ.jpg"
                      alt="image"
                    />
                  </div>
                </li>
                <li className="w-40 px-2">
                  <div>
                    <Image
                      className="w-full"
                      width={100}
                      height={100}
                      src="https://media.themoviedb.org/t/p/w150_and_h225_bestv2/f5FtqYnUfI9EdkhEWNLPZReDilJ.jpg"
                      alt="image"
                    />
                  </div>
                </li>
                <li className="w-40 px-2">
                  <div>
                    <Image
                      className="w-full"
                      width={100}
                      height={100}
                      src="https://media.themoviedb.org/t/p/w150_and_h225_bestv2/f5FtqYnUfI9EdkhEWNLPZReDilJ.jpg"
                      alt="image"
                    />
                  </div>
                </li>
                <li className="w-40 px-2">
                  <div>
                    <Image
                      className="w-full"
                      width={100}
                      height={100}
                      src="https://media.themoviedb.org/t/p/w150_and_h225_bestv2/f5FtqYnUfI9EdkhEWNLPZReDilJ.jpg"
                      alt="image"
                    />
                  </div>
                </li>
                <li className="w-40 px-2">
                  <div>
                    <Image
                      className="w-full"
                      width={100}
                      height={100}
                      src="https://media.themoviedb.org/t/p/w150_and_h225_bestv2/f5FtqYnUfI9EdkhEWNLPZReDilJ.jpg"
                      alt="image"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* credits */}
        <section id="credits">
          <div id="credits_list" className="dark:text-white">
            <h3 className="font-bold py-4 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">
              Oyunculuk
            </h3>
            <div className="w-full rounded shadow-xl border-solid border-inherit dark:border-gray-800 border-2">
              <ul>
                <li>
                  <ul className="flex justify-start items-center h-20">
                    <li className="p-5">
                      <p>2025</p>
                    </li>
                    <li className="p-5 flex flex-col">
                      <Link href="#">Fast X: Part 2</Link>
                      <span>
                        &quot;as&quot;
                        <span id="character"> Deckard Shaw</span>
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <h3 className="font-bold py-4 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">
              Prodüksiyon
            </h3>
            <div className="w-full rounded shadow-xl border-solid border-inherit dark:border-gray-800 border-2">
              <ul>
                <li>
                  <ul className="flex justify-start items-center h-20">
                    <li className="p-5">
                      <p>2025</p>
                    </li>
                    <li className="p-5 flex flex-col">
                      <Link href="#">Fast X: Part 2</Link>
                      <span>
                      &quot;as&quot;
                        <span id="character"> Deckard Shaw</span>
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
