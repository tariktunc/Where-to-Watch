import { configureStore } from "@reduxjs/toolkit";
import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage,
} from "@/stores/localStroge";
import languageSettingSlice from "@/stores/Slices/languageSettingSlice";
import whereToWatchCountrySlice from "@/stores/Slices/whereToWatchCountrySlice";

const reducer = {
  languageSetting: languageSettingSlice,
  whereToWatchSetting: whereToWatchCountrySlice,
};

const store = configureStore({
  reducer,
  devTools: true,
  preloadedState: loadStateFromLocalStorage(),
});

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});
export default store;
