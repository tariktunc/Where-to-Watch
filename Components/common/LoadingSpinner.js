"use client";

export default function LoadingSpinner() {
  return (
    <div
      className="bg-white dark:bg-primary"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "60vh",
      }}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          border: "4px solid rgba(0,0,0,0.1)",
          borderTopColor: "#0A1A38",
          borderRadius: "50%",
          animation: "spin 0.8s linear infinite",
        }}
      />
      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
