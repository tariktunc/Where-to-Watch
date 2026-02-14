import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="bg-primary text-white"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        gap: "16px",
        padding: "32px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "72px", fontWeight: 700, margin: 0, opacity: 0.3 }}>404</h1>
      <h2 style={{ fontSize: "24px", fontWeight: 700, margin: 0 }}>Page not found</h2>
      <p style={{ fontSize: "16px", opacity: 0.7, maxWidth: "400px" }}>
        We could not find the page you were looking for.
      </p>
      <Link
        href="/"
        style={{
          marginTop: "8px",
          padding: "12px 32px",
          borderRadius: "8px",
          backgroundColor: "rgba(255,255,255,0.15)",
          color: "white",
          textDecoration: "none",
          fontSize: "14px",
          fontWeight: 600,
          transition: "background-color 0.2s",
        }}
      >
        Go Home
      </Link>
    </div>
  );
}
