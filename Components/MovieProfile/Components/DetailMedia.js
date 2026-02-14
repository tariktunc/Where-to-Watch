"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

function VideoModal({ videoKey, onClose }) {
  if (!videoKey) return null;
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.85)",
      }}
      onClick={onClose}
    >
      <div
        style={{ position: "relative", width: "min(900px, 90vw)", aspectRatio: "16/9" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "-40px",
            right: "0",
            background: "none",
            border: "none",
            color: "white",
            fontSize: "28px",
            cursor: "pointer",
          }}
        >
          &times;
        </button>
        <iframe
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
          style={{ width: "100%", height: "100%", border: "none", borderRadius: "8px" }}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Video"
        />
      </div>
    </div>
  );
}

export default function DetailMedia({ imageData, videoData }) {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("backdrops");
  const [activeVideo, setActiveVideo] = useState(null);

  const backdrops = imageData?.backdrops?.slice(0, 12) || [];
  const posters = imageData?.posters?.slice(0, 12) || [];
  const videos = videoData?.results?.filter((v) => v.site === "YouTube").slice(0, 8) || [];

  const hasContent = backdrops.length > 0 || posters.length > 0 || videos.length > 0;
  if (!hasContent) return null;

  const tabs = [
    { key: "backdrops", label: t("detail.backdrops"), count: backdrops.length },
    { key: "videos", label: t("detail.videos"), count: videos.length },
    { key: "posters", label: t("detail.posters"), count: posters.length },
  ];

  return (
    <section style={{ marginBottom: "32px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "16px",
          flexWrap: "wrap",
        }}
      >
        <h3 className="text-primary dark:text-white" style={{ fontSize: "20px", fontWeight: 600, margin: 0 }}>
          {t("detail.media")}
        </h3>
        <div style={{ display: "flex", gap: "4px" }}>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                padding: "4px 14px",
                fontSize: "13px",
                fontWeight: 600,
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                transition: "all 0.2s",
                backgroundColor: activeTab === tab.key ? "rgba(10,26,56,0.1)" : "transparent",
                color: activeTab === tab.key ? "#0A1A38" : "rgba(10,26,56,0.5)",
              }}
              className={`${activeTab === tab.key ? "dark:!bg-white/15 dark:!text-white" : "dark:!text-white/60 hover:dark:!text-white"}`}
            >
              {tab.label} {tab.count > 0 && <span style={{ opacity: 0.7 }}>({tab.count})</span>}
            </button>
          ))}
        </div>
      </div>

      <div
        className="custom-scrollbar"
        style={{
          display: "flex",
          gap: "12px",
          overflowX: "auto",
          overflowY: "hidden",
          paddingBottom: "12px",
        }}
      >
        {activeTab === "backdrops" &&
          backdrops.map((img, i) => (
            <div
              key={i}
              style={{
                flex: "0 0 auto",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Image
                src={`https://image.tmdb.org/t/p/w533_and_h300_bestv2${img.file_path}`}
                width={533}
                height={300}
                alt={`Backdrop ${i + 1}`}
                style={{ height: "200px", width: "auto", display: "block" }}
              />
            </div>
          ))}

        {activeTab === "videos" &&
          videos.map((video) => (
            <div
              key={video.key}
              style={{
                flex: "0 0 300px",
                borderRadius: "8px",
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
              }}
              onClick={() => setActiveVideo(video.key)}
            >
              <Image
                src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                width={300}
                height={169}
                alt={video.name}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(0,0,0,0.3)",
                }}
              >
                <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="20" stroke="white" strokeWidth="2" fill="rgba(0,0,0,0.4)" />
                  <path d="M19 14l14 10-14 10V14z" fill="white" />
                </svg>
              </div>
              <p
                style={{
                  position: "absolute",
                  bottom: "8px",
                  left: "8px",
                  right: "8px",
                  fontSize: "12px",
                  color: "white",
                  margin: 0,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  textShadow: "0 1px 3px rgba(0,0,0,0.8)",
                }}
              >
                {video.name}
              </p>
            </div>
          ))}

        {activeTab === "posters" &&
          posters.map((img, i) => (
            <div
              key={i}
              style={{
                flex: "0 0 auto",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Image
                src={`https://image.tmdb.org/t/p/w185${img.file_path}`}
                width={185}
                height={278}
                alt={`Poster ${i + 1}`}
                style={{ height: "200px", width: "auto", display: "block" }}
              />
            </div>
          ))}
      </div>

      <VideoModal videoKey={activeVideo} onClose={() => setActiveVideo(null)} />
    </section>
  );
}
