import axios from "axios";

export const fetchUrlTheMovieDb = async (url) => {
  const apiKey = process.env.API_KEY; // Sunucu tarafında tutulan anahtar
  try {
    const response = await axios.get(url, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`, // Bearer eklenmesi
      },
    });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
