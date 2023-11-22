// stores/Slices/languageSettingSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
  name: "languagesSetting",
  initialState: {
    language: "TR",
  },
  reducers: {
    setLanguage: (state, action) => {
      const value = action.payload;
      state.language = value;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
