import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
    name: "languageSetting",
    initialState: {
        settings: {
            english: "en-EN",
            turkey: "tr-TR",
            germany: "de-DE",
            usa: "en-US",
        },
    },
    reducers: {
        language: (state, action) => {
            const { name } = action.payload;
            state.settings[name] = name;
        },
    },
});

export const { language } = languageSlice.actions;

export default languageSlice.reducer;
