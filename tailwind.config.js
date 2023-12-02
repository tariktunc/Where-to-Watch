/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Ana dizine eklenen icerikler, Burada kaynak dosyalari belirtilir.
    "./Pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stores/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  plugins: [],
};
