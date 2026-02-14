"use client";
import React, { useEffect, useCallback } from "react";
import Navbar from "@/Components/common/Navbar/Navbar";
import DiscoverSection from "@/Components/DiscoverSection/DiscoverSection";
import MovieScroller from "@/Components/HomeSection/MovieScroller";
import LatestTrailers from "@/Components/HomeSection/LatestTrailers";
import AwardsSection from "@/Components/HomeSection/AwardsSection";
import Footer from "@/Components/common/Footer/Footer";
import { useSelector } from "react-redux";
import { useTranslation } from "@/hooks/useTranslation";

export default function Home() {
  const theme = useSelector((state) => state.theme.theme);
  const { t } = useTranslation();

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const trendingTabs = [
    { label: t("home.today"), value: "day" },
    { label: t("home.thisWeek"), value: "week" },
  ];

  const popularTabs = [
    { label: t("home.streaming"), value: "streaming" },
    { label: t("home.onTv"), value: "on_tv" },
    { label: t("home.forRent"), value: "for_rent" },
    { label: t("home.inTheaters"), value: "in_theaters" },
  ];

  const freeTabs = [
    { label: t("home.movies"), value: "movie" },
    { label: t("home.tv"), value: "tv" },
  ];

  const buildTrendingUrl = useCallback((tab, lang) => {
    return `https://api.themoviedb.org/3/trending/all/${tab}?language=${lang}`;
  }, []);

  const buildPopularUrl = useCallback((tab, lang) => {
    const endpoints = {
      streaming: `https://api.themoviedb.org/3/movie/popular?language=${lang}`,
      on_tv: `https://api.themoviedb.org/3/tv/popular?language=${lang}`,
      for_rent: `https://api.themoviedb.org/3/movie/upcoming?language=${lang}`,
      in_theaters: `https://api.themoviedb.org/3/movie/now_playing?language=${lang}`,
    };
    return endpoints[tab];
  }, []);

  const buildFreeUrl = useCallback((tab, lang) => {
    return `https://api.themoviedb.org/3/trending/${tab}/week?language=${lang}`;
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <DiscoverSection />

      <MovieScroller
        title={t("home.trending")}
        tabs={trendingTabs}
        defaultTab="day"
        buildUrl={buildTrendingUrl}
      />

      <LatestTrailers />

      <MovieScroller
        title={t("home.whatsPopular")}
        tabs={popularTabs}
        defaultTab="streaming"
        buildUrl={buildPopularUrl}
      />

      <AwardsSection />

      <MovieScroller
        title={t("home.freeToWatch")}
        tabs={freeTabs}
        defaultTab="movie"
        buildUrl={buildFreeUrl}
      />

      <Footer />
    </div>
  );
}
