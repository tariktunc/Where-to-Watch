import { createSlice } from "@reduxjs/toolkit";

const initialState = typeof window !== "undefined"
  ? localStorage.getItem("language") || "TR"
  : "TR";

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      const language = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("language", language);
      }
      return (state = language);
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
