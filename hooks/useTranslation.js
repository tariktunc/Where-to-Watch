"use client";
import { useSelector } from "react-redux";
import tr from "@/locales/tr.json";
import en from "@/locales/en.json";
import de from "@/locales/de.json";
import es from "@/locales/es.json";
import fr from "@/locales/fr.json";
import pt from "@/locales/pt.json";
import ru from "@/locales/ru.json";

const translations = {
  TR: tr,
  US: en,
  GR: de,
  ES: es,
  FR: fr,
  PT: pt,
  RU: ru,
};

// Language code to TMDB locale mapping
const LOCALE_MAP = {
  TR: "tr-TR",
  US: "en-US",
  GR: "de-DE",
  ES: "es-ES",
  FR: "fr-FR",
  PT: "pt-BR",
  RU: "ru-RU",
};

export function useTranslation() {
  const language = useSelector((state) => state.languageSetting);

  const t = (key) => {
    const keys = key.split(".");
    let result = translations[language] || translations["US"];
    for (const k of keys) {
      result = result?.[k];
    }
    return result || key;
  };

  const locale = LOCALE_MAP[language] || "en-US";

  return { t, language, locale };
}
