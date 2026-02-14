"use client";
import React, { useEffect } from "react";
import Navbar from "@/Components/common/Navbar/Navbar";
import Footer from "@/Components/common/Footer/Footer";
import { useSelector } from "react-redux";
import { useTranslation } from "@/hooks/useTranslation";

export default function PrivacyPage() {
  const theme = useSelector((state) => state.theme.theme);
  const { t } = useTranslation();

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const sectionStyle = {
    marginBottom: "28px",
  };

  const headingStyle = {
    fontSize: "20px",
    fontWeight: 600,
    marginBottom: "12px",
  };

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
            {t("privacy.title")}
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.85)",
              marginTop: "12px",
              marginBottom: 0,
            }}
          >
            {t("privacy.lastUpdated")}
          </p>
        </div>

        <div className="dark:text-gray-200" style={{ lineHeight: 1.8, fontSize: "15px" }}>
          <div style={sectionStyle}>
            <h2 className="dark:text-white" style={headingStyle}>{t("privacy.section1Title")}</h2>
            <p>
              {t("privacy.section1Desc")}
            </p>
            <ul style={{ paddingLeft: "20px", marginTop: "8px" }}>
              <li style={{ marginBottom: "6px" }}>
                <strong>{t("privacy.section1Item1Label")}</strong> {t("privacy.section1Item1Desc")}
              </li>
              <li style={{ marginBottom: "6px" }}>
                <strong>{t("privacy.section1Item2Label")}</strong> {t("privacy.section1Item2Desc")}
              </li>
              <li style={{ marginBottom: "6px" }}>
                <strong>{t("privacy.section1Item3Label")}</strong> {t("privacy.section1Item3Desc")}
              </li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 className="dark:text-white" style={headingStyle}>{t("privacy.section2Title")}</h2>
            <p>
              {t("privacy.section2Desc")}
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 className="dark:text-white" style={headingStyle}>{t("privacy.section3Title")}</h2>
            <p>
              {t("privacy.section3Desc")}{" "}
              <a
                href="https://www.themoviedb.org/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0A1A38", textDecoration: "none" }}
              >
                {t("privacy.section3Link")}
              </a>
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 className="dark:text-white" style={headingStyle}>{t("privacy.section4Title")}</h2>
            <p>
              {t("privacy.section4Desc")}
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 className="dark:text-white" style={headingStyle}>{t("privacy.section5Title")}</h2>
            <p>
              {t("privacy.section5Desc")}
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 className="dark:text-white" style={headingStyle}>{t("privacy.section6Title")}</h2>
            <p>
              {t("privacy.section6Desc")}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
