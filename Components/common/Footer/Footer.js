"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

function getFooterColumns(t) {
  return [
    {
      title: t("footer.theBasics"),
      links: [
        { label: t("footer.aboutWtw"), href: "/about" },
        { label: t("footer.contactUs"), href: "/contact" },
        { label: t("footer.api"), href: "https://developer.themoviedb.org/docs" },
      ],
    },
    {
      title: t("footer.getInvolved"),
      links: [
        { label: t("footer.popularMovies"), href: "/movie/popular" },
        { label: t("footer.popularTvShows"), href: "/tvshow/popular" },
        { label: t("footer.trending"), href: "/" },
      ],
    },
    {
      title: t("footer.community"),
      links: [
        { label: t("footer.discussions"), href: "/discussions" },
        { label: t("footer.people"), href: "/people/popular" },
      ],
    },
    {
      title: t("footer.legal"),
      links: [
        { label: t("footer.termsOfUse"), href: "/terms" },
        { label: t("footer.privacyPolicy"), href: "/privacy" },
      ],
    },
  ];
}

export default function Footer() {
  const { t } = useTranslation();
  const footerColumns = getFooterColumns(t);

  return (
    <footer
      style={{
        backgroundColor: "#0A1A38",
        color: "white",
        padding: "40px 32px",
        marginTop: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: "0 0 200px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                background: "linear-gradient(to right, #D2E4C7, #0A1A38)",
                borderRadius: "8px",
                padding: "8px 14px",
              }}
            >
              <span style={{ fontSize: "20px", fontWeight: 800, color: "white" }}>
                WTW
              </span>
            </div>
          </div>
          <p
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            {t("footer.description")}
          </p>
        </div>

        {footerColumns.map((col) => (
          <div key={col.title} style={{ flex: "0 0 auto", minWidth: "120px" }}>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: 700,
                marginBottom: "12px",
                marginTop: 0,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              {col.title}
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {col.links.map((link) => (
                <li key={link.href} style={{ marginBottom: "8px" }}>
                  <Link
                    href={link.href}
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                      fontSize: "14px",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        style={{
          maxWidth: "1280px",
          margin: "32px auto 0",
          paddingTop: "20px",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", margin: 0 }}>
          {t("footer.disclaimer")}
        </p>
        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", margin: 0 }}>
          &copy; {new Date().getFullYear()} {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}
