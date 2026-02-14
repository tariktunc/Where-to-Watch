"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PersonCard({ person }) {
  const profileUrl = person.profile_path
    ? `https://image.tmdb.org/t/p/w235_and_h235_face${person.profile_path}`
    : null;

  const knownForTitles = (person.known_for || [])
    .map((item) => item.title || item.name)
    .filter(Boolean)
    .join(", ");

  return (
    <Link
      href={`/people/${person.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        style={{
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          transition: "box-shadow 0.2s, transform 0.2s",
          cursor: "pointer",
          backgroundColor: "white",
        }}
        className="dark:!bg-gray-800"
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.2)";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        {/* Profile Image */}
        <div
          style={{
            width: "100%",
            aspectRatio: "2/3",
            position: "relative",
            backgroundColor: "#dbdbdb",
          }}
          className="dark:!bg-gray-700"
        >
          {profileUrl ? (
            <Image
              src={profileUrl}
              alt={person.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#999"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          )}
        </div>

        {/* Info */}
        <div style={{ padding: "10px 12px" }}>
          <h3
            style={{
              fontSize: "15px",
              fontWeight: 700,
              margin: 0,
              lineHeight: 1.3,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
            className="dark:text-white"
          >
            {person.name}
          </h3>
          {knownForTitles && (
            <p
              style={{
                fontSize: "13px",
                color: "#666",
                margin: "4px 0 0",
                lineHeight: 1.4,
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
              className="dark:!text-gray-400"
            >
              {knownForTitles}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
