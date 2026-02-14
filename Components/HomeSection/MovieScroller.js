"use client";
import React, { useState, useEffect } from "react";
import { fetchUrlTheMovieDb } from "@/utils/apiService";
import { useTranslation } from "@/hooks/useTranslation";
import SectionToggle from "./SectionToggle";
import MediaCard from "@/Components/common/MediaCard";

export default function MovieScroller({ title, tabs, buildUrl, defaultTab, mediaType }) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].value);
  const [items, setItems] = useState([]);
  const { locale } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = buildUrl(activeTab, locale);
        const res = await fetchUrlTheMovieDb(url);
        const results = res.data.results || [];
        setItems(results);
      } catch (error) {
        // silently handled
      }
    };
    fetchData();
  }, [activeTab, locale, title, buildUrl, mediaType]);

  return (
    <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <SectionToggle
        title={title}
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <div
        className="custom-scrollbar flex gap-3 sm:gap-4 lg:gap-5 overflow-x-auto overflow-y-hidden pt-5 pb-4"
      >
        {items.map((item, index) => (
          <MediaCard
            key={item.id || index}
            id={item.id}
            title={item.title || item.name}
            posterPath={item.poster_path}
            rating={item.vote_average}
            date={item.release_date || item.first_air_date}
            mediaType={mediaType}
          />
        ))}
      </div>
    </section>
  );
}
