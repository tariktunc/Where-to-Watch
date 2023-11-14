// stores/Slices/languageSettingSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
    name: "languagesSetting",
    initialState: { language: "en" },
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload;
        },
    },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
