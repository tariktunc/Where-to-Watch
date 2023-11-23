// stores/Slices/languageSettingSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { loadStateFromLocalStorage } from "@/stores/localStroge";

const defaultwhereToWatch = "TR"; // Varsayılan dil ayarı

const storedWatchSettingState =
  loadStateFromLocalStorage()?.whereToWatchSetting?.country;
const initialWhereToWatchState = storedWatchSettingState || defaultwhereToWatch;

const initialState = {
  country: initialWhereToWatchState,
};

export const whereToWatchCountrySlice = createSlice({
  name: "countrySetting",
  initialState,
  reducers: {
    setCountry: (state, action) => {
      const value = action.payload;
      state.country = value;
    },
  },
});

export const { setCountry } = whereToWatchCountrySlice.actions;

export default whereToWatchCountrySlice.reducer;
