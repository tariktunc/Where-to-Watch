import { createSlice } from "@reduxjs/toolkit";
import { loadStateFromLocalStorage } from "@/stores/localStroge";

const initialState = loadStateFromLocalStorage();

export const whereToWatchCountrySlice = createSlice({
  name: "countrySetting",
  initialState,
  reducers: {
    setCountry: (state, action) => {
      state.country = action.payload;
    },
  },
});

export const { setCountry } = whereToWatchCountrySlice.actions;
export default whereToWatchCountrySlice.reducer;
