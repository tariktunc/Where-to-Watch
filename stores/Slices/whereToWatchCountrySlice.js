import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  countryLoCase: "en",
  countryUpCase: "US",
};

export const whereToWatchCountrySlice = createSlice({
  name: "countrySetting",
  initialState,
  reducers: {
    setCountry: (state, action) => {
      let country = action.payload;

      // Gelen ülke değerini küçük harfe ve büyük harfe dönüştür
      const countryLoCase = convertToLowerCase(country);
      const countryUpCase = convertToUpperCase(country);

      // Durumu güncelle
      state.countryLoCase = countryLoCase;
      state.countryUpCase = countryUpCase;

      // Küçük harfli ülke değerini JSON dizesi olarak yerel depolamaya kaydet
      let userCountry = JSON.stringify(state.countryLoCase);
      localStorage.setItem("country", userCountry);
    },
  },
});

export const { setCountry } = whereToWatchCountrySlice.actions;
export default whereToWatchCountrySlice.reducer;

// Bir stringi küçük harfe dönüştürmek için yardımcı bir fonksiyon
function convertToLowerCase(value) {
  // Kendi mantığınıza göre değeri küçük harfe dönüştürün
  // Örneğin, value.toLowerCase() kullanabilirsiniz
  return value.toLowerCase();
}

// Bir stringi büyük harfe dönüştürmek için yardımcı bir fonksiyon
function convertToUpperCase(value) {
  // Kendi mantığınıza göre değeri büyük harfe dönüştürün
  // Örneğin, value.toUpperCase() kullanabilirsiniz
  return value.toUpperCase();
}
