"use client";
import React from "react";

export default function SectionToggle({ title, tabs, activeTab, onTabChange }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      <h3
        className="text-primary dark:text-white"
        style={{
          fontSize: "24px",
          fontWeight: 600,
          margin: 0,
        }}
      >
        {title}
      </h3>

      <div
        className="border border-primary/30 dark:border-white/30"
        style={{
          display: "flex",
          borderRadius: "30px",
          overflow: "hidden",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => onTabChange(tab.value)}
            className={
              activeTab === tab.value
                ? "bg-primary dark:bg-white/15 text-white"
                : "bg-transparent text-primary/60 dark:text-white/70 hover:text-primary dark:hover:text-white"
            }
            style={{
              padding: "6px 20px",
              fontSize: "14px",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              whiteSpace: "nowrap",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
