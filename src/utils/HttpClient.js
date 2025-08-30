// src/utils/httpClient.js
import axios from "axios";

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://api.yourapp.com",
  timeout: 10000, // 10s timeout
});

// ✅ Request interceptor
httpClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Response interceptor
httpClient.interceptors.response.use(
  (response) => response, // return data directly
  (error) => {
    if (error.response) {
      const { status } = error.response;

      if (status === 401) {
        // Token expired → logout or refresh
        localStorage.removeItem("token");
        window.location.href = "/login"; // redirect user
      } else if (status >= 500) {
        console.error("Server error:", error.response.data);
      }
    } else {
      console.error("Network error:", error.message);
    }

    return Promise.reject(error);
  }
);

export default httpClient;
