import { createSlice } from "@reduxjs/toolkit";

const initialState = "TR";

export const whereToWatchCountrySlice = createSlice({
  name: "countrySetting",
  initialState,
  reducers: {
    setCountry: (state, action) => {
      let country = action.payload;
      return (state = country);
    },
  },
});

export const { setCountry } = whereToWatchCountrySlice.actions;
export default whereToWatchCountrySlice.reducer;
