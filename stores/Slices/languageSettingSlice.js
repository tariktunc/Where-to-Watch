import { createSlice } from "@reduxjs/toolkit";
import { loadStateFromLocalStorage } from "@/stores/localStroge";

const defaultLanguage = "TR"; // Varsayılan dil ayarı

const storedLanguageState =
  loadStateFromLocalStorage()?.languageSetting?.language;
const initialLanguageState = storedLanguageState || defaultLanguage;

const initialState = {
  language: initialLanguageState,
};

const languageSlice = createSlice({
  name: "languageSetting",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      const value = action.payload;
      state.language = value;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
