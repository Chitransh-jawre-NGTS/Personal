// src/api/authApi.js
import httpClient from "../utils/HttpClient";
import { ApiRoutes } from "../utils/endpoints";

// ✅ Login API
export const loginUserApi = async (credentials) => {
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

// ✅ Register API
export const registerUserApi = async (userData) => {
  try {
    const { Endpoint, Method } = ApiRoutes.Auth.Register;

    const response = await httpClient({
      url: Endpoint,
      method: Method,
      data: userData,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Register API Error:", error);
    throw error.response?.data || { message: "Something went wrong" };
  }
};

// ✅ Signout API
export const signoutUserApi = async () => {
  try {
    const { Endpoint, Method } = ApiRoutes.Auth.Logout;

    const response = await httpClient({
      url: Endpoint,
      method: Method,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Signout API Error:", error);
    throw error.response?.data || { message: "Something went wrong" };
  }
};
