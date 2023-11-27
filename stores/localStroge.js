export const saveStateToLocalStorage = (state) => {
  if (typeof localStorage !== "undefined") {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("languageAndCountryStorage", serializedState);
    } catch (err) {
      console.error("Error saving state:", err);
    }
  }
};

export const loadStateFromLocalStorage = () => {
  if (typeof localStorage !== "undefined") {
    try {
      const serializedState = localStorage.getItem("languageAndCountryStorage");

      if (!serializedState) {
        const defaultState = {
          languageSetting: {
            language: "TR",
          },

          whereToWatchSetting: {
            country: "TR",
          },
        };

        localStorage.setItem(
          "languageAndCountryStorage",
          JSON.stringify(defaultState)
        );

        return defaultState;
      }

      return JSON.parse(serializedState);
    } catch (err) {
      console.error("Error loading state:", err);
    }
  }
};
