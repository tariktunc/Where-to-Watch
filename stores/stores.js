// stores.js
"use client";
import { configureStore } from "@reduxjs/toolkit";
import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage,
} from "@/stores/localStroge";
import languageSlice from "../stores/Slices/languageSettingSlice";
import whereToWatchLanguageSlice from "../stores/Slices/whereToWatchLanguageSlice";

const persistedState = loadStateFromLocalStorage();
const reducer = {
  languagesSetting: languageSlice,
  whereToWatchSetting: whereToWatchLanguageSlice,
};

const store = configureStore({
  reducer,
  // devTools: true,
  // preloadedState: persistedState,
});

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});

export default store;
// store'un default olarak export edilmesi gerekiyor
