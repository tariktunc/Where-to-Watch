import { createSlice } from "@reduxjs/toolkit";

let darkMode;
if (typeof window !== "undefined") {
  // Yalnızca tarayıcı ortamında çalıştır
  try {
    darkMode = localStorage.getItem("themes");
    if (darkMode === null) {
      localStorage.setItem("themes", "dark");
      darkMode = "dark";
    }
  } catch (error) {
    console.log("Error in initialState", error);
  }
}

const initialState = {
  theme: darkMode || "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (typeof window !== "undefined") {
        // Yalnızca tarayıcı ortamında çalıştır
        try {
          const currentTheme = localStorage.getItem("themes");
          const newTheme = currentTheme === "dark" ? "light" : "dark";
          localStorage.setItem("themes", newTheme);
          state.theme = newTheme;
        } catch (error) {
          console.log("Error in toggleTheme", error);
        }
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
