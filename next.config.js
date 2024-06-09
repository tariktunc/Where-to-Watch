/** @type {import('next').NextConfig} */
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  env: {
    API_KEY: process.env.API_KEY_SECRET,
  },
  images: {
    domains: [
      "image.tmdb.org",
      "www.themoviedb.org",
      "images.remotePatterns",
      "api.themoviedb.org",
      "media.themoviedb.org",
    ],
  },
};
