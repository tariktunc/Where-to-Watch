"use client";
import React from "react";
import Image from "next/image";

export default function Home(props) {
  return (
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
            <h3 className="font-bold 2xl:text-2xl lg:text-xl md:text-md sm:text-sm text-xs my-3">
              Kisi Bilgileri
            </h3>
            <div className="w-full ">
              <section>
                <p className="flex flex-col my-3">
                  <strong className="my-2 font-bold">Bilinen Işi</strong>
                  Oyunculuk
                </p>
                <p className="flex flex-col my-3">
                  <strong className="my-2 font-bold">Bilinen Filmleri</strong>
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
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
