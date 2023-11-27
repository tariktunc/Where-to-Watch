import { createSlice } from "@reduxjs/toolkit";
import { loadStateFromLocalStorage } from "@/stores/localStroge";

const initialState = loadStateFromLocalStorage();

const languageSettingSlice = createSlice({
  name: "languageSetting",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSettingSlice.actions;
export default languageSettingSlice.reducer;
