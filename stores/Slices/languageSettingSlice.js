import { createSlice } from "@reduxjs/toolkit";

function getLanguage() {
  const language = localStorage.getItem("language");
  const defaultLanguage = "TR";
  if (language) {
    return language;
  } else {
    return defaultLanguage;
  }
}

console.log("language", getLanguage());
const initialState = getLanguage();

const languageSettingSlice = createSlice({
  name: "languageSetting",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      let language = action.payload;
      return (state = language);
    },
  },
});

export const { setLanguage } = languageSettingSlice.actions;
export default languageSettingSlice.reducer;
