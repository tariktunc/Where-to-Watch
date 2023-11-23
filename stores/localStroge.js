// localStorage.js
export const saveStateToLocalStorage = (state) => {
  if (typeof window !== "undefined") {
    // Tarayıcı ortamında çalışıp çalışmadığını kontrol et
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("reduxState", serializedState);
    } catch (err) {
      console.error("LocalStorage kaydetme hatasi:", err);
    }
  }
};

export const loadStateFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    try {
      const serializedState = localStorage.getItem("reduxState");
      if (serializedState === null) {
        return { languagesSetting: { language: "TR" } };
      }
      return JSON.parse(serializedState);
    } catch (err) {
      console.error("LocalStorage okuma hatası:", err);
      return { languagesSetting: { language: "TR" } };
    }
  }
};
