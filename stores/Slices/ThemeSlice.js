import { createSlice } from "@reduxjs/toolkit";

function getTheme() {
  const theme = localStorage.getItem("theme");
  if (theme) {
    return theme;
  } else {
    return "light";
  }
}

const initialState = {
  theme: getTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      state.theme = newTheme;
      localStorage.setItem("theme", newTheme);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
