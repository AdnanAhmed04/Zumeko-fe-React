import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

const getApiInstance = () => {
  if (!API_URL) {
    console.error("❌ VITE_API_URL is not defined");
  }

  return axios.create({
    baseURL: API_URL,
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      "Content-Type": "application/json",
    },
  });
};

export const getData = async (endpoint, params = {}) => {
  const api = getApiInstance();
  try {
    console.log("🌍 Fetching:", `${API_URL}${endpoint}`, params);
    const response = await api.get(endpoint, { params });
    // console.log('onboarding status response', response.data.data);
    return response.data;
  } catch (error) {
    console.error(
      "❌ API GET Error:",
      endpoint,
      error.response?.status,
      error.response?.data || error.message
    );
    throw error.response?.data || { message: "Unknown error" };
  }
};
