import axios from "axios";

export const fetchUrlTheMovieDb = async (url, options = {}) => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  try {
    const response = await axios.get(url, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      ...options,
    });
    return response;
  } catch (error) {
    if (axios.isCancel(error)) return null;
    throw error;
  }
};
