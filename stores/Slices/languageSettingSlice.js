"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = "TR";

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      const language = action.payload;
      localStorage.setItem("language", language);
      return (state = language);
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
