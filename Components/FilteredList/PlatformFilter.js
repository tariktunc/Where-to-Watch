"use client";
import React from "react";
import Image from "next/image";

export default function PlatformFilter({
  providers,
  selectedProviders,
  onToggle,
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "8px",
      }}
    >
      {providers.map((provider) => {
        const isActive = selectedProviders.includes(provider.provider_id);
        return (
          <button
            key={provider.provider_id}
            onClick={() => onToggle(provider.provider_id)}
            title={provider.provider_name}
            style={{
              width: "100%",
              aspectRatio: "1",
              borderRadius: "8px",
              border: isActive ? "2px solid #0A1A38" : "2px solid transparent",
              padding: 0,
              cursor: "pointer",
              overflow: "hidden",
              position: "relative",
              background: "transparent",
              transition: "all 0.2s ease",
              opacity: isActive ? 1 : 0.7,
            }}
            onMouseEnter={(e) => {
              if (!isActive) e.currentTarget.style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              if (!isActive) e.currentTarget.style.opacity = "0.7";
            }}
          >
            <Image
              src={`https://image.tmdb.org/t/p/w92${provider.logo_path}`}
              width={46}
              height={46}
              alt={provider.provider_name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />
            {isActive && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(21, 0, 197, 0.3)",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}
