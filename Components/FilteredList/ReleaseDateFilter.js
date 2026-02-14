"use client";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";

export default function ReleaseDateFilter({
  dateGte,
  dateLte,
  onChangeGte,
  onChangeLte,
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
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div>
        <label style={labelStyle} className="dark:text-gray-300">
          {t("filter.from")}
        </label>
        <input
          type="date"
          value={dateGte}
          onChange={(e) => onChangeGte(e.target.value)}
          style={inputStyle}
          className="dark:!bg-gray-700 dark:!border-gray-600 dark:!text-white"
        />
      </div>
      <div>
        <label style={labelStyle} className="dark:text-gray-300">
          {t("filter.to")}
        </label>
        <input
          type="date"
          value={dateLte}
          onChange={(e) => onChangeLte(e.target.value)}
          style={inputStyle}
          className="dark:!bg-gray-700 dark:!border-gray-600 dark:!text-white"
        />
      </div>
    </div>
  );
}
