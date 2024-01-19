"use client";
import Image from "next/image";
import Link from "next/link";

// Bu sayfayı grid ile de yapabilirisn biraz araştır.

export default function Home(props) {
  return (
    <section>
      <div id="media_v4">
        <div id="column_wrapper">
          <div id="content_wrapper" className="grid grid-cols-6">
            {/* Grey */}
            <div className="min-w-[300px] col-start-1 col-end-3">
              <section id="orginal_header">
                <div id="image_content">
                  <div id="image">
                    <Image
                      className="rounded-md w-80"
                      src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/dHBHZRHEVBAdozGC4SWyIIP5NLh.jpg"
                      alt="loading"
                      width={1000}
                      height={1000}
                    />
                  </div>
                </div>
              </section>
              <div>
                <section id="details">
                  <div className="dark:text-white">
                    <h3 className="font-bold 2xl:text-2xl lg:text-xl md:text-md sm:text-sm text-xs ">
                      Kişi Bilgileri
                    </h3>
                    <table className="w-full ">
                      <section>
                        <p className="flex flex-col my-3">
                          <strong className="my-2 font-bold">
                            Bilinen Işi
                          </strong>
                          Oyunculuk
                        </p>
                        <p className="flex flex-col my-3">
                          <strong className="my-2 font-bold">
                            Bilinen Filmleri
                          </strong>
                          27
                        </p>
                        <p className="flex flex-col my-3">
                          <strong className="my-2 font-bold">Doğum Günü</strong>
                          1997-06-26 (26 yasinda)
                        </p>
                        <p className="flex flex-col my-3">
                          <strong className="my-2 font-bold">Dogum yeri</strong>
                          Brisbane, Queensland, Australia
                        </p>
                      </section>
                    </table>
                  </div>
                </section>
              </div>
            </div>
            {/* White */}
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
                    <h3 className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">
                      Biyografi
                    </h3>
                    <p className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl ">
                      Jackie Chan (d. 7 Nisan 1954, Hong Kong), dövüş ustası,
                      aktör, yönetmen, yapımcı, senarist, dublör, dbulör
                      koordinatörü, ses dublajcısı, kameraman ve şarkıcıdır.
                      Filmlerinde; akrobatik dövüş stili, eğlenceli bir unsur
                      oluşturan zamanlaması ve çevresindeki eşyaları silah
                      olarak kullanması ile tanınır. Jackie Chan, 1962'den
                      beridir 100'ün üstünde filmde oynamıştır. Hollywood
                      Bulvarı'nda kendi adına yapılmış yıldızı vardır.
                      Filmlerinde çoğu zaman şarkıları da seslendirmektedir ve
                      1980'lerde başlayan bir pop müzik kariyeri de vardır.
                    </p>
                  </div>
                </section>
                {/* known */}
                <section id="full_wrapper">
                  <div id="known_for">
                    <h3 className="font-bold text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl dark:text-white">
                      Bilinen Filmler
                    </h3>
                    <div id="known_for_list" className="dark:text-white bg-blue-500">
                      <ul className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl flex">
                        <li className="bg-green-300 m-2 w-40 h-full">
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
                        <li className="bg-green-300 m-2 w-40 h-full">
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
                        <li className="bg-green-300 m-2 w-40 h-full">
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
                        <li className="bg-green-300 m-2 w-40 h-full">
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
                    <table className="w-full rounded shadow-xl border-solid border-inherit dark:border-gray-800 border-2">
                      <tbody>
                        <tr>
                          <td>
                            <table>
                              <tbody className="flex justify-start items-center h-20">
                                <tr className="p-5">
                                  <td>2025</td>
                                </tr>
                                <tr className="p-5 flex flex-col">
                                  <Link href="#">Fast X: Part 2</Link>
                                  <span>
                                    "as"
                                    <span id="character">Deckard Shaw</span>
                                  </span>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <table>
                              <tbody className="flex justify-start items-center h-20">
                                <tr className="p-5">
                                  <td>2025</td>
                                </tr>
                                <tr className="p-5 flex flex-col">
                                  <Link href="#">Fast X: Part 2</Link>
                                  <span>
                                    "as"
                                    <span id="character">Deckard Shaw</span>
                                  </span>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <table>
                              <tbody className="flex justify-start items-center h-20">
                                <tr className="p-5">
                                  <td>2025</td>
                                </tr>
                                <tr className="p-5 flex flex-col">
                                  <Link href="#">Fast X: Part 2</Link>
                                  <span>
                                    "as"
                                    <span id="character">Deckard Shaw</span>
                                  </span>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <table>
                              <tbody className="flex justify-start items-center h-20">
                                <tr className="p-5">
                                  <td>2025</td>
                                </tr>
                                <tr className="p-5 flex flex-col">
                                  <Link href="#">Fast X: Part 2</Link>
                                  <span>
                                    "as"
                                    <span id="character">Deckard Shaw</span>
                                  </span>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <table>
                              <tbody className="flex justify-start items-center h-20">
                                <tr className="p-5">
                                  <td>2025</td>
                                </tr>
                                <tr className="p-5 flex flex-col">
                                  <Link href="#">Fast X: Part 2</Link>
                                  <span>
                                    "as"
                                    <span id="character">Deckard Shaw</span>
                                  </span>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr> 
                      </tbody>
                    </table>
                    <h3 className="font-bold py-4 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">Prodüksiyon</h3>
                    <table className="w-full rounded shadow-xl border-solid border-inherit dark:border-gray-800 border-2">
                      <tbody>
                        <tr>
                          <td>
                            <table>
                              <tbody className="flex justify-start items-center h-20">
                                <tr className="p-5">
                                  <td>2025</td>
                                </tr>
                                <tr className="p-5 flex flex-col">
                                  <Link href="#">Fast X: Part 2</Link>
                                  <span>
                                    "as"
                                    <span id="character">Deckard Shaw</span>
                                  </span>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <table>
                              <tbody className="flex justify-start items-center h-20">
                                <tr className="p-5">
                                  <td>2025</td>
                                </tr>
                                <tr className="p-5 flex flex-col">
                                  <Link href="#">Fast X: Part 2</Link>
                                  <span>
                                    "as"
                                    <span id="character">Deckard Shaw</span>
                                  </span>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <table>
                              <tbody className="flex justify-start items-center h-20">
                                <tr className="p-5">
                                  <td>2025</td>
                                </tr>
                                <tr className="p-5 flex flex-col">
                                  <Link href="#">Fast X: Part 2</Link>
                                  <span>
                                    "as"
                                    <span id="character">Deckard Shaw</span>
                                  </span>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <table>
                              <tbody className="flex justify-start items-center h-20">
                                <tr className="p-5">
                                  <td>2025</td>
                                </tr>
                                <tr className="p-5 flex flex-col">
                                  <Link href="#">Fast X: Part 2</Link>
                                  <span>
                                    "as"
                                    <span id="character">Deckard Shaw</span>
                                  </span>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <table>
                              <tbody className="flex justify-start items-center h-20">
                                <tr className="p-5">
                                  <td>2025</td>
                                </tr>
                                <tr className="p-5 flex flex-col">
                                  <Link href="#">Fast X: Part 2</Link>
                                  <span>
                                    "as"
                                    <span id="character">Deckard Shaw</span>
                                  </span>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <table>
                              <tbody className="flex justify-start items-center h-20">
                                <tr className="p-5">
                                  <td>2025</td>
                                </tr>
                                <tr className="p-5 flex flex-col">
                                  <Link href="#">Fast X: Part 2</Link>
                                  <span>
                                    "as"
                                    <span id="character">Deckard Shaw</span>
                                  </span>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <table>
                              <tbody className="flex justify-start items-center h-20">
                                <tr className="p-5">
                                  <td>2025</td>
                                </tr>
                                <tr className="p-5 flex flex-col">
                                  <Link href="#">Fast X: Part 2</Link>
                                  <span>
                                    "as"
                                    <span id="character">Deckard Shaw</span>
                                  </span>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <table>
                              <tbody className="flex justify-start items-center h-20">
                                <tr className="p-5">
                                  <td>2025</td>
                                </tr>
                                <tr className="p-5 flex flex-col">
                                  <Link href="#">Fast X: Part 2</Link>
                                  <span>
                                    "as"
                                    <span id="character">Deckard Shaw</span>
                                  </span>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
