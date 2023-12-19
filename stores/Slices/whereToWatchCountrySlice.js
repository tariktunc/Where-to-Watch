import { createSlice } from "@reduxjs/toolkit";

function getCountry() {
  const country = localStorage.getItem("country");
  if (country) {
    return country;
  } else {
    return "TR";
  }
}

const initialState = getCountry();

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
