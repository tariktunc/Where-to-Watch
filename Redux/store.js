// Store.js
"use client";

import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "@/Redux/Slices/languageSlice";

const reducer = {
    languageSetting: languageSlice,
};

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
});
