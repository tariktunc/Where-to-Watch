"use client";
import React, { useEffect } from "react";
import Navbar from "@/Components/common/Navbar/Navbar";
import Footer from "@/Components/common/Footer/Footer";
import { useSelector } from "react-redux";
import { useTranslation } from "@/hooks/useTranslation";

export default function TermsPage() {
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
            {t("terms.title")}
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.85)",
              marginTop: "12px",
              marginBottom: 0,
            }}
          >
            {t("terms.lastUpdated")}
          </p>
        </div>

        <div className="dark:text-gray-200" style={{ lineHeight: 1.8, fontSize: "15px" }}>
          <div style={sectionStyle}>
            <h2 className="dark:text-white" style={headingStyle}>{t("terms.section1Title")}</h2>
            <p>
              {t("terms.section1Desc")}
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 className="dark:text-white" style={headingStyle}>{t("terms.section2Title")}</h2>
            <p>
              {t("terms.section2Desc")}
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 className="dark:text-white" style={headingStyle}>{t("terms.section3Title")}</h2>
            <p>
              {t("terms.section3Desc")}
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 className="dark:text-white" style={headingStyle}>{t("terms.section4Title")}</h2>
            <p>{t("terms.section4Desc")}</p>
            <ul style={{ paddingLeft: "20px", marginTop: "8px" }}>
              <li style={{ marginBottom: "6px" }}>{t("terms.section4Item1")}</li>
              <li style={{ marginBottom: "6px" }}>{t("terms.section4Item2")}</li>
              <li style={{ marginBottom: "6px" }}>{t("terms.section4Item3")}</li>
              <li style={{ marginBottom: "6px" }}>{t("terms.section4Item4")}</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 className="dark:text-white" style={headingStyle}>{t("terms.section5Title")}</h2>
            <p>
              {t("terms.section5Desc")}
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 className="dark:text-white" style={headingStyle}>{t("terms.section6Title")}</h2>
            <p>
              {t("terms.section6Desc")}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
