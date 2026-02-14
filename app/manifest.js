export default function manifest() {
  return {
    name: "Where to Watch",
    short_name: "WTW",
    description: "Discover movies and TV shows. Find where to stream, rent, or buy.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0A1A38",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  };
}
