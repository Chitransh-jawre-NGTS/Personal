// src/api/authApi.js
import httpClient from "../utils/HttpClient";
import { ApiRoutes } from "../utils/endpoints";

// Login API
export const loginUser = async (credentials) => {
  try {
    const { Endpoint, Method } = ApiRoutes.Auth.Login;

    const response = await httpClient({
      url: Endpoint,
      method: Method,
      data: credentials,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1", // keep here if only auth needs it
      },
    });

    return response.data; // always return only useful data
  } catch (error) {
    console.error("Login API Error:", error);
    throw error.response?.data || { message: "Something went wrong" };
  }
};
