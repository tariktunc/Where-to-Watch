"use client";
import Link from "next/link";

export default function Error({ reset }) {
  return (
    <div
      className="bg-white dark:bg-primary text-primary dark:text-white"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        gap: "16px",
        padding: "32px",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "24px", fontWeight: 700 }}>Something went wrong</h2>
      <p className="text-gray-500 dark:text-white/60" style={{ fontSize: "16px" }}>
        An error occurred while loading this page.
      </p>
      <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
        <button
          onClick={() => reset()}
          className="bg-primary dark:bg-white/10 text-white"
          style={{
            padding: "10px 24px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: 600,
          }}
        >
          Try Again
        </button>
        <Link
          href="/"
          className="text-primary dark:text-accent"
          style={{ padding: "10px 24px", fontSize: "14px", fontWeight: 600 }}
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
