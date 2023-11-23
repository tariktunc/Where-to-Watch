// stores.js

import { configureStore } from "@reduxjs/toolkit";
import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage,
} from "@/stores/localStroge";
import languageSettingSlice from "../stores/Slices/languageSettingSlice";
import whereToWatchCountrySlice from "./Slices/whereToWatchCountrySlice";

const persistedState = loadStateFromLocalStorage();
const reducer = {
  languageSetting: languageSettingSlice,
  whereToWatchSetting: whereToWatchCountrySlice,
};

const store = configureStore({
  reducer,
  devTools: true,
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});

export default store;
// store'un default olarak export edilmesi gerekiyor
