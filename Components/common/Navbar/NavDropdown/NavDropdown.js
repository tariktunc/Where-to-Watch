"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function NavDropdown({ menu }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      style={{ position: "relative", height: "100%", display: "flex", alignItems: "center", listStyle: "none" }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={menu.href}
        style={{
          display: "flex",
          alignItems: "center",
          padding: "8px 16px",
          fontSize: "16px",
          fontWeight: 600,
          color: "white",
          textDecoration: "none",
          whiteSpace: "nowrap",
          transition: "opacity 0.15s",
          opacity: isOpen ? 0.7 : 1,
        }}
      >
        {menu.label}
      </Link>

      {/* Dropdown - TMDB style white */}
      <div
        style={{
          position: "absolute",
          top: "100%",
          left: 0,
          width: "220px",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          overflow: "hidden",
          transition: "all 0.15s ease",
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
          transform: isOpen ? "translateY(0)" : "translateY(-4px)",
          zIndex: 50,
        }}
      >
        {menu.items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            style={{
              display: "block",
              padding: "12px 20px",
              fontSize: "14px",
              fontWeight: 500,
              color: "#333",
              textDecoration: "none",
              transition: "background-color 0.1s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f5f5f5")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </li>
  );
}
