"use client";
import React, { useState } from "react";

export default function FilterPanel({ title, defaultOpen = true, children }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      style={{
        borderRadius: "8px",
        marginBottom: "8px",
        border: "1px solid #e3e3e3",
        overflow: "hidden",
      }}
      className="dark:!border-gray-700"
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "14px 16px",
          cursor: "pointer",
          userSelect: "none",
          backgroundColor: "white",
        }}
        className="dark:!bg-gray-800"
      >
        <h3
          style={{
            margin: 0,
            fontSize: "16px",
            fontWeight: 600,
          }}
          className="dark:text-white"
        >
          {title}
        </h3>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
          className="dark:text-gray-400"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
      {isOpen && (
        <div
          style={{
            padding: "0 16px 16px",
            backgroundColor: "white",
          }}
          className="dark:!bg-gray-800"
        >
          {children}
        </div>
      )}
    </div>
  );
}
