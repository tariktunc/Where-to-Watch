import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  languageLoCase: "en",
  languageUpCase: "US",
};

const languageSettingSlice = createSlice({
  name: "languageSetting",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      let newLanguage = action.payload;

      const languageLoCase = convertToLowerCase(newLanguage);
      const languageUpCase = convertToUpperCase(newLanguage);

      state.languageLoCase = languageLoCase;
      state.languageUpCase = languageUpCase;
    },
  },
});

export const { setLanguage } = languageSettingSlice.actions;
export default languageSettingSlice.reducer;

function convertToLowerCase(value) {
  return value.toLowerCase();
}

function convertToUpperCase(value) {
  return value.toUpperCase();
}
