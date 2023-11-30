import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  languageLoCase: "en",
  languageUpCase: "US",
};

const languageSettingSlice = createSlice({
  name: "languageSetting",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      let newLanguage = action.payload;

      // Validate the newLanguage input here

      // Convert the newLanguage to lowercase and uppercase
      const languageLoCase = convertToLowerCase(newLanguage);
      const languageUpCase = convertToUpperCase(newLanguage);

      // Update the state
      state.languageLoCase = languageLoCase;
      state.languageUpCase = languageUpCase;

      // Store the lowercase language in local storage
      let userLanguage = JSON.stringify(languageLoCase);
      localStorage.setItem("language", userLanguage);
    },
  },
});

export const { setLanguage } = languageSettingSlice.actions;
export default languageSettingSlice.reducer;

// Utility function to convert a string to lowercase
function convertToLowerCase(value) {
  // Implement your own logic to convert the value to lowercase
  // For example, you can use value.toLowerCase()
  return value.toLowerCase();
}

// Utility function to convert a string to uppercase
function convertToUpperCase(value) {
  // Implement your own logic to convert the value to uppercase
  // For example, you can use value.toUpperCase()
  return value.toUpperCase();
}
