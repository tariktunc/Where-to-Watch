"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemCard from "@/Components/Items/Popular/ItemCard";

export default function Popular() {
  // State'lerin ve değişkenlerin tanımlanması
  const [data, setData] = useState([]); // Filmlerin verilerini saklamak için state
  const [loading, setLoading] = useState(true); // Yükleme durumu için state
  const imageUrl = "https://image.tmdb.org/t/p/w500"; // Resimlerin URL'i
  const API_KEY = process.env.API_KEY; // API anahtarının alınması

  // Component ilk render edildiğinde çalışacak olan useEffect
  useEffect(() => {
    // Asenkron veri getirme işlevi
    const fetchData = async () => {
      try {
        let allData = []; // Tüm filmlerin toplandığı dizi

        // 1'den 5'e kadar olan her sayfa için veri alınması
        for (let page = 1; page <= 2; page++) {
          const options = {
            method: "GET",
            url: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
            headers: {
              accept: "application/json",
              Authorization: API_KEY,
            },
          };

          // Axios ile API isteği yapılması
          const response = await axios(options);
          const responseData = response.data.results;

          // Her sayfa için alınan verilerin allData dizisine eklenmesi
          allData = [...allData, ...responseData];
        }

        // Tüm verilerin state'e atanması ve yükleme durumunun kapatılması
        setData(allData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    // fetchData işlevinin çağrılması
    fetchData();
  }, [API_KEY]); // Boş dependency array, sadece bir kere çalışmasını sağlar

  return (
    <div className="flex flex-wrap max-w-screen-lg">
      <div className="flex flex-wrap">
        {/* Yükleme durumu kontrolü */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          // Verilerin ekrana yazdırılması
          data.map((item) => (
            <div key={item.id + Math.random()} className="w-60 h-auto">
              <ItemCard
                url={imageUrl + item.poster_path}
                altName={item.title}
                titleName={item.title}
                rating={item.vote_average}
                year={item.release_date}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
