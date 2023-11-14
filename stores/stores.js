// stores.js
"use client";
import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "../stores/Slices/languageSettingSlice";

const reducer = {
    languageSlice: languageSlice,
};

const store = configureStore({
    reducer,
    devTools: true,
});

export default store;
// store'un default olarak export edilmesi gerekiyor
