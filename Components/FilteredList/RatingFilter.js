"use client";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";

export default function RatingFilter({
  minRating,
  maxRating,
  onChangeMin,
  onChangeMax,
}) {
  const { t } = useTranslation();

  const inputStyle = {
    width: "100%",
    padding: "8px 12px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "14px",
    backgroundColor: "white",
    outline: "none",
  };

  const labelStyle = {
    fontSize: "13px",
    fontWeight: 500,
    marginBottom: "4px",
    display: "block",
  };

  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <div style={{ flex: 1 }}>
        <label style={labelStyle} className="dark:text-gray-300">
          {t("filter.from")}
        </label>
        <input
          type="number"
          min={0}
          max={10}
          step={0.5}
          value={minRating}
          onChange={(e) => onChangeMin(parseFloat(e.target.value) || 0)}
          style={inputStyle}
          className="dark:!bg-gray-700 dark:!border-gray-600 dark:!text-white"
        />
      </div>
      <div style={{ flex: 1 }}>
        <label style={labelStyle} className="dark:text-gray-300">
          {t("filter.to")}
        </label>
        <input
          type="number"
          min={0}
          max={10}
          step={0.5}
          value={maxRating}
          onChange={(e) => onChangeMax(parseFloat(e.target.value) || 10)}
          style={inputStyle}
          className="dark:!bg-gray-700 dark:!border-gray-600 dark:!text-white"
        />
      </div>
    </div>
  );
}
