"use client";
import React from "react";

export default function GenreFilter({ genres, selectedGenres, onToggle }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
      {genres.map((genre) => {
        const isActive = selectedGenres.includes(genre.id);
        return (
          <button
            key={genre.id}
            onClick={() => onToggle(genre.id)}
            style={{
              padding: "4px 12px",
              borderRadius: "14px",
              fontSize: "14px",
              fontWeight: 400,
              border: isActive ? "1px solid transparent" : "1px solid #0A1A38",
              background: isActive
                ? "#0A1A38"
                : "transparent",
              color: isActive ? "white" : "#0A1A38",
              cursor: "pointer",
              transition: "all 0.2s ease",
              whiteSpace: "nowrap",
            }}
            className={!isActive ? "dark:!border-gray-500 dark:!text-white" : ""}
          >
            {genre.name}
          </button>
        );
      })}
    </div>
  );
}
