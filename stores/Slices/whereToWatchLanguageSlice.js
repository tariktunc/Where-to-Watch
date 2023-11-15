// stores/Slices/languageSettingSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const whereToWatchLanguageSlice = createSlice({
    name: "whereToWatchLanguageSlice",
    initialState: {
        language: "TR",
    },
    reducers: {
        setCountry: (state, action) => {
            const value = action.payload;
            state.language = value;
        },
    },
});

export const { setCountry } = whereToWatchLanguageSlice.actions;

export default whereToWatchLanguageSlice.reducer;
