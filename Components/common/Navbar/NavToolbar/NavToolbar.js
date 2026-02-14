"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "@/stores/Slices/languageSettingSlice";
import { toggleTheme } from "@/stores/Slices/ThemeSlice";
import { useTranslation } from "@/hooks/useTranslation";
import SearchPopup from "./SearchPopup/SearchPopup";

const LANGUAGES = [
  { code: "TR", label: "T\u00fcrk\u00e7e", flag: "\ud83c\uddf9\ud83c\uddf7" },
  { code: "US", label: "English", flag: "\ud83c\uddfa\ud83c\uddf8" },
  { code: "GR", label: "Deutsch", flag: "\ud83c\udde9\ud83c\uddea" },
  { code: "ES", label: "Espa\u00f1ol", flag: "\ud83c\uddea\ud83c\uddf8" },
  { code: "FR", label: "Fran\u00e7ais", flag: "\ud83c\uddeb\ud83c\uddf7" },
  { code: "PT", label: "Portugu\u00eas", flag: "\ud83c\udde7\ud83c\uddf7" },
  { code: "RU", label: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439", flag: "\ud83c\uddf7\ud83c\uddfa" },
];

export default function NavToolbar() {
  const dispatch = useDispatch();
  const { t, language } = useTranslation();
  const theme = useSelector((state) => state.theme.theme);
  const [mounted, setMounted] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const iconBtnStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "32px",
    height: "32px",
    color: "white",
    cursor: "pointer",
    transition: "opacity 0.2s",
    border: "none",
    background: "none",
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      {/* Language dropdown */}
      <div
        style={{ position: "relative" }}
        onMouseEnter={() => setLangOpen(true)}
        onMouseLeave={() => setLangOpen(false)}
      >
        <button
          style={{
            ...iconBtnStyle,
            border: "2px solid white",
            borderRadius: "4px",
            fontSize: "11px",
            fontWeight: 700,
            backgroundColor: langOpen ? "white" : "transparent",
            color: langOpen ? "#0A1A38" : "white",
          }}
          title={t("navbar.changeLanguage")}
        >
          {language}
        </button>
        <div
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            marginTop: "4px",
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            overflow: "hidden",
            opacity: langOpen ? 1 : 0,
            visibility: langOpen ? "visible" : "hidden",
            transform: langOpen ? "translateY(0)" : "translateY(-4px)",
            transition: "all 0.15s ease",
            zIndex: 50,
            minWidth: "140px",
          }}
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                dispatch(setLanguage(lang.code));
                setLangOpen(false);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                width: "100%",
                padding: "10px 16px",
                border: "none",
                background: language === lang.code ? "#f0f0f0" : "transparent",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: language === lang.code ? 700 : 400,
                color: "#333",
                transition: "background-color 0.1s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f5f5f5")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = language === lang.code ? "#f0f0f0" : "transparent")}
            >
              <span style={{ fontSize: "16px" }}>{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Theme toggle */}
      <button
        onClick={() => dispatch(toggleTheme())}
        style={iconBtnStyle}
        title={mounted ? (theme === "dark" ? t("navbar.lightMode") : t("navbar.darkMode")) : t("navbar.toggleTheme")}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        {mounted && theme === "dark" ? (
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
          </svg>
        ) : (
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </button>

      {/* Search toggle + popup */}
      <div style={{ position: "relative" }}>
        <button
          onClick={() => setSearchOpen(!searchOpen)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            backgroundColor: searchOpen ? "#FF9C43" : "#0A1A38",
            color: "white",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          title={t("navbar.search")}
          onMouseEnter={(e) => {
            if (!searchOpen)
              e.currentTarget.style.backgroundColor = "#FF9C43";
          }}
          onMouseLeave={(e) => {
            if (!searchOpen)
              e.currentTarget.style.backgroundColor = "#0A1A38";
          }}
        >
          {searchOpen ? (
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M1 1l12 12M13 1L1 13" />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          )}
        </button>
        <SearchPopup
          isOpen={searchOpen}
          onClose={() => setSearchOpen(false)}
        />
      </div>
    </div>
  );
}
