"use client";
import React, { useState, useEffect } from "react";
import { fetchUrlTheMovieDb } from "@/utils/apiService";
import { useTranslation } from "@/hooks/useTranslation";
import DetailHero from "./Components/DetailHero";
import DetailCast from "./Components/DetailCast";
import DetailMedia from "./Components/DetailMedia";
import DetailSidebar from "./Components/DetailSidebar";
import DetailRecommendations from "./Components/DetailRecommendations";
import DetailReviews from "./Components/DetailReviews";

export default function MovieProfile({ params, status }) {
  const [profileData, setProfileData] = useState(null);
  const [castData, setCastData] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [videoData, setVideoData] = useState(null);
  const [watchProviders, setWatchProviders] = useState(null);
  const [recommendations, setRecommendations] = useState(null);
  const [keywords, setKeywords] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(true);

  const { locale } = useTranslation();

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      try {
        const [profileRes, castRes, imageRes, videoRes, providerRes, recoRes, keywordRes, reviewRes] =
          await Promise.all([
            fetchUrlTheMovieDb(
              `https://api.themoviedb.org/3/${status}/${params}?language=${locale}`
            ),
            fetchUrlTheMovieDb(
              `https://api.themoviedb.org/3/${status}/${params}/credits?language=${locale}`
            ),
            fetchUrlTheMovieDb(
              `https://api.themoviedb.org/3/${status}/${params}/images`
            ),
            fetchUrlTheMovieDb(
              `https://api.themoviedb.org/3/${status}/${params}/videos?language=${locale}`
            ),
            fetchUrlTheMovieDb(
              `https://api.themoviedb.org/3/${status}/${params}/watch/providers`
            ),
            fetchUrlTheMovieDb(
              `https://api.themoviedb.org/3/${status}/${params}/recommendations?language=${locale}`
            ),
            fetchUrlTheMovieDb(
              `https://api.themoviedb.org/3/${status}/${params}/keywords`
            ),
            fetchUrlTheMovieDb(
              `https://api.themoviedb.org/3/${status}/${params}/reviews?language=${locale}`
            ),
          ]);

        if (profileRes?.status === 200) setProfileData(profileRes.data);
        if (castRes?.status === 200) setCastData(castRes.data);
        if (imageRes?.status === 200) setImageData(imageRes.data);
        if (videoRes?.status === 200) setVideoData(videoRes.data);
        if (providerRes?.status === 200) setWatchProviders(providerRes.data);
        if (recoRes?.status === 200) setRecommendations(recoRes.data);
        if (keywordRes?.status === 200) setKeywords(keywordRes.data);
        if (reviewRes?.status === 200) setReviews(reviewRes.data);
      } catch (error) {
        console.error("MovieProfile fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, [params, status, locale]);

  if (loading || !profileData) {
    return (
      <div
        className="bg-white dark:bg-primary"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            border: "3px solid rgba(255,255,255,0.2)",
            borderTopColor: "white",
            borderRadius: "50%",
            animation: "spin 0.8s linear infinite",
          }}
        />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  const countryCode = locale.slice(0, 2).toUpperCase();

  return (
    <div className="bg-white dark:bg-primary" style={{ minHeight: "100vh" }}>
      <DetailHero
        profileData={profileData}
        castData={castData}
        status={status}
        videoData={videoData}
        watchProviders={watchProviders}
        countryCode={countryCode}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "30px 32px",
          display: "flex",
          gap: "40px",
        }}
      >
        {/* Main content */}
        <div style={{ flex: "1 1 0", minWidth: "0" }}>
          <DetailCast castData={castData} />
          <DetailMedia imageData={imageData} videoData={videoData} />
          <DetailReviews reviews={reviews} />
          <DetailRecommendations recommendations={recommendations} status={status} />
        </div>

        {/* Sidebar */}
        <DetailSidebar
          profileData={profileData}
          castData={castData}
          watchProviders={watchProviders}
          keywords={keywords}
          status={status}
          countryCode={countryCode}
        />
      </div>
    </div>
  );
}
