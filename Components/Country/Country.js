"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "@/stores/Slices/languageSettingSlice";

export default function CountryItem(props) {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.languageSetting);

  return (
    <select
      defaultValue={language}
      onChange={props.handleCountryChange}
      className="border border-gray-300 text-sm rounded-md block w-40 p-2">
      <option value={"US"}>English</option>
      <option value={"TR"}>Türkiye</option>
    </select>
  );
}
