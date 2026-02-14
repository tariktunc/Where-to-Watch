import React from "react";

function SkeletonCard() {
  return (
    <div style={{ flex: "0 0 185px", animation: "pulse 1.5s ease-in-out infinite" }}>
      <div
        style={{
          width: "185px",
          height: "278px",
          borderRadius: "8px",
          background: "linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 1.5s infinite",
        }}
        className="dark:!bg-none dark:!bg-white/10"
      />
      <div style={{ paddingTop: "20px", paddingLeft: "4px" }}>
        <div
          style={{
            width: "140px",
            height: "14px",
            borderRadius: "4px",
            marginBottom: "8px",
          }}
          className="bg-gray-200 dark:bg-white/10"
        />
        <div
          style={{
            width: "90px",
            height: "12px",
            borderRadius: "4px",
          }}
          className="bg-gray-200 dark:bg-white/10"
        />
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div role="status" className="flex flex-wrap justify-center gap-5">
      {Array.from({ length: 10 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
