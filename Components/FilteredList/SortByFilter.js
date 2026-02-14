"use client";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";

export default function SortByFilter({ value, onChange }) {
  const { t } = useTranslation();

  const options = [
    { value: "popularity.desc", label: t("filter.popularityDesc") },
    { value: "popularity.asc", label: t("filter.popularityAsc") },
    { value: "vote_average.desc", label: t("filter.ratingDesc") },
    { value: "vote_average.asc", label: t("filter.ratingAsc") },
    {
      value: "primary_release_date.desc",
      label: t("filter.releaseDateDesc"),
    },
    { value: "primary_release_date.asc", label: t("filter.releaseDateAsc") },
    { value: "title.asc", label: t("filter.titleAZ") },
    { value: "title.desc", label: t("filter.titleZA") },
  ];

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: "100%",
        padding: "8px 12px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        fontSize: "14px",
        backgroundColor: "white",
        cursor: "pointer",
        outline: "none",
      }}
      className="dark:!bg-gray-700 dark:!border-gray-600 dark:!text-white"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
