import { configureStore } from "@reduxjs/toolkit";
import languageSettingSlice from "@/stores/Slices/languageSettingSlice";
import whereToWatchCountrySlice from "@/stores/Slices/whereToWatchCountrySlice";
import themeReducer from "@/stores/Slices/ThemeSlice";

const reducer = {
  languageSetting: languageSettingSlice,
  whereToWatchSetting: whereToWatchCountrySlice,
  theme: themeReducer,
};

const store = configureStore({
  reducer,
});

export default store;
