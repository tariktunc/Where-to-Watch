"use client";
import React, { useEffect } from "react";
import Navbar from "@/Components/common/Navbar/Navbar";
import Footer from "@/Components/common/Footer/Footer";
import { useSelector } from "react-redux";
import { useTranslation } from "@/hooks/useTranslation";

export default function AboutPage() {
  const theme = useSelector((state) => state.theme.theme);
  const { t } = useTranslation();

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <Navbar />
      <main
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "40px 32px",
          minHeight: "60vh",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "linear-gradient(to right, #0A1A38, #0A1A38)",
            borderRadius: "12px",
            padding: "40px",
            marginBottom: "32px",
          }}
        >
          <h1
            style={{
              fontSize: "36px",
              fontWeight: 700,
              color: "white",
              margin: 0,
            }}
          >
            {t("about.title")}
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.85)",
              marginTop: "12px",
              marginBottom: 0,
              lineHeight: 1.6,
            }}
          >
            {t("about.subtitle")}
          </p>
        </div>

        {/* Content */}
        <div className="dark:text-gray-200" style={{ lineHeight: 1.8, fontSize: "16px" }}>
          <h2
            className="dark:text-white"
            style={{ fontSize: "24px", fontWeight: 600, marginBottom: "16px" }}
          >
            {t("about.whatIsWtw")}
          </h2>
          <p style={{ marginBottom: "20px", color: "inherit" }}>
            {t("about.whatIsWtwDesc")}
          </p>

          <h2
            className="dark:text-white"
            style={{ fontSize: "24px", fontWeight: 600, marginBottom: "16px" }}
          >
            {t("about.dataSource")}
          </h2>
          <p style={{ marginBottom: "20px", color: "inherit" }}>
            {t("about.dataSourceDesc")}
          </p>

          <h2
            className="dark:text-white"
            style={{ fontSize: "24px", fontWeight: 600, marginBottom: "16px" }}
          >
            {t("about.features")}
          </h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "20px" }}>
            <li style={{ marginBottom: "8px" }}>{t("about.feature1")}</li>
            <li style={{ marginBottom: "8px" }}>{t("about.feature2")}</li>
            <li style={{ marginBottom: "8px" }}>{t("about.feature3")}</li>
            <li style={{ marginBottom: "8px" }}>{t("about.feature4")}</li>
            <li style={{ marginBottom: "8px" }}>{t("about.feature5")}</li>
          </ul>

          <h2
            className="dark:text-white"
            style={{ fontSize: "24px", fontWeight: 600, marginBottom: "16px" }}
          >
            {t("about.openSource")}
          </h2>
          <p style={{ color: "inherit" }}>
            {t("about.openSourceDesc")}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
