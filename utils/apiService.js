import axios from "axios";

export const fetchUrlTheMovieDb = async (url) => {
  try {
    const response = await axios.get(url, {
      headers: {
        accept: "application/json",
        Authorization: process.env.API_KEY,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
