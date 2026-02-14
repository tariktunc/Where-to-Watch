"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/Components/common/Navbar/Navbar";
import Footer from "@/Components/common/Footer/Footer";
import { useSelector } from "react-redux";
import { useTranslation } from "@/hooks/useTranslation";

export default function ContactPage() {
  const theme = useSelector((state) => state.theme.theme);
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    fontSize: "15px",
    borderRadius: "8px",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main
        style={{
          maxWidth: "700px",
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
            {t("contact.title")}
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.85)",
              marginTop: "12px",
              marginBottom: 0,
            }}
          >
            {t("contact.subtitle")}
          </p>
        </div>

        {submitted ? (
          <div
            className="bg-[#f0fdf4] dark:bg-surface-dark border border-[#bbf7d0] dark:border-[#444]"
            style={{
              textAlign: "center",
              padding: "60px 20px",
              borderRadius: "12px",
            }}
          >
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>&#10003;</div>
            <h2
              className="dark:text-white"
              style={{ fontSize: "24px", fontWeight: 600, marginBottom: "8px" }}
            >
              {t("contact.messageSent")}
            </h2>
            <p className="dark:text-gray-300" style={{ color: "#666" }}>
              {t("contact.messageSentDesc")}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <label
                className="dark:text-gray-200"
                style={{ display: "block", fontSize: "14px", fontWeight: 600, marginBottom: "6px" }}
              >
                {t("contact.name")}
              </label>
              <input type="text" required placeholder={t("contact.namePlaceholder")} className="bg-white dark:bg-surface-dark text-[#333] dark:text-gray-200 border border-[#ddd] dark:border-[#444]" style={inputStyle} />
            </div>

            <div>
              <label
                className="dark:text-gray-200"
                style={{ display: "block", fontSize: "14px", fontWeight: 600, marginBottom: "6px" }}
              >
                {t("contact.email")}
              </label>
              <input type="email" required placeholder={t("contact.emailPlaceholder")} className="bg-white dark:bg-surface-dark text-[#333] dark:text-gray-200 border border-[#ddd] dark:border-[#444]" style={inputStyle} />
            </div>

            <div>
              <label
                className="dark:text-gray-200"
                style={{ display: "block", fontSize: "14px", fontWeight: 600, marginBottom: "6px" }}
              >
                {t("contact.subject")}
              </label>
              <input type="text" required placeholder={t("contact.subjectPlaceholder")} className="bg-white dark:bg-surface-dark text-[#333] dark:text-gray-200 border border-[#ddd] dark:border-[#444]" style={inputStyle} />
            </div>

            <div>
              <label
                className="dark:text-gray-200"
                style={{ display: "block", fontSize: "14px", fontWeight: 600, marginBottom: "6px" }}
              >
                {t("contact.message")}
              </label>
              <textarea
                required
                rows={5}
                placeholder={t("contact.messagePlaceholder")}
                className="bg-white dark:bg-surface-dark text-[#333] dark:text-gray-200 border border-[#ddd] dark:border-[#444]"
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>

            <button
              type="submit"
              style={{
                padding: "14px 32px",
                fontSize: "16px",
                fontWeight: 700,
                border: "none",
                borderRadius: "30px",
                cursor: "pointer",
                background: "linear-gradient(to left, #D2E4C7, #92B079)",
                color: "#0A1A38",
                alignSelf: "flex-start",
                transition: "opacity 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {t("contact.sendButton")}
            </button>
          </form>
        )}
      </main>
      <Footer />
    </>
  );
}
