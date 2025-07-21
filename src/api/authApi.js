// src/api/authApi.js
import httpClient from "../utils/HttpClient";
import { ApiRoutes } from "../utils/endpoints";

export const loginUser = async (credentials) => {
  const { Endpoint, Method } = ApiRoutes.Auth.Login;
  const response = await httpClient({
    url: Endpoint,
    method: Method,
    data: credentials,
       headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres-free-v1"
        },
  });
  return response.data;
};
