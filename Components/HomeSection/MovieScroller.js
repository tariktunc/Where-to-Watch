"use client";
import React, { useState, useEffect } from "react";
import { fetchUrlTheMovieDb } from "@/utils/apiService";
import { useTranslation } from "@/hooks/useTranslation";
import SectionToggle from "./SectionToggle";
import MovieCard from "./MovieCard";

export default function MovieScroller({ title, tabs, buildUrl, defaultTab, mediaType }) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].value);
  const [items, setItems] = useState([]);
  const [providersMap, setProvidersMap] = useState({});
  const { locale } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = buildUrl(activeTab, locale);
        const res = await fetchUrlTheMovieDb(url);
        const results = res.data.results || [];
        setItems(results);

        const countryCode = locale.slice(0, 2).toUpperCase();
        const provMap = {};
        const providerPromises = results.slice(0, 20).map(async (item) => {
          try {
            const type = mediaType || (item.media_type === "tv" ? "tv" : "movie");
            const provRes = await fetchUrlTheMovieDb(
              `https://api.themoviedb.org/3/${type}/${item.id}/watch/providers`
            );
            const countryData = provRes.data.results?.[countryCode];
            if (countryData) {
              const allProviders = [
                ...(countryData.flatrate || []),
                ...(countryData.rent || []),
                ...(countryData.buy || []),
              ];
              const seen = new Set();
              const unique = allProviders.filter((p) => {
                if (seen.has(p.provider_id)) return false;
                seen.add(p.provider_id);
                return true;
              });
              if (unique.length > 0) {
                provMap[item.id] = unique;
              }
            }
          } catch {
            // skip
          }
        });
        await Promise.all(providerPromises);
        setProvidersMap(provMap);
      } catch (error) {
        console.error(`MovieScroller [${title}] fetch error:`, error);
      }
    };
    fetchData();
  }, [activeTab, locale, title, buildUrl, mediaType]);

  return (
    <section
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "30px 32px",
      }}
    >
      <SectionToggle
        title={title}
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <div
        className="custom-scrollbar"
        style={{
          display: "flex",
          gap: "20px",
          overflowX: "auto",
          overflowY: "hidden",
          paddingTop: "20px",
          paddingBottom: "16px",
        }}
      >
        {items.map((item, index) => (
          <MovieCard
            key={item.id || index}
            item={item}
            mediaType={mediaType}
            providers={providersMap[item.id]}
          />
        ))}
      </div>
    </section>
  );
}
