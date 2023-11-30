import { configureStore } from "@reduxjs/toolkit";
import languageSettingSlice from "@/stores/Slices/languageSettingSlice";
import whereToWatchCountrySlice from "@/stores/Slices/whereToWatchCountrySlice";

const reducer = {
  languageSetting: languageSettingSlice,
  whereToWatchSetting: whereToWatchCountrySlice,
};

const store = configureStore({
  reducer,
  devTools: true,
});

export default store;
