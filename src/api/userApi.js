// src/api/userApi.js
import httpClient from "../utils/HttpClient";
import { ApiRoutes } from "../utils/endpoints";

// Fetch all users
export const fetchAllUsers = async () => {
  const { Endpoint, Method } = ApiRoutes.Users.All;
  const response = await httpClient({
    url: Endpoint,
    method: Method,
  });
  return response.data;
};

// Fetch single user
export const fetchUserById = async (id) => {
  const { Endpoint, Method } = ApiRoutes.Users.ById(id);
  const response = await httpClient({
    url: Endpoint,
    method: Method,
  });
  return response.data;
};

// Update user
export const updateUser = async (id, payload) => {
  const { Endpoint, Method } = ApiRoutes.Users.Update(id);
  const response = await httpClient({
    url: Endpoint,
    method: Method,
    data: payload,
  });
  return response.data;
};

// Delete user
export const deleteUser = async (id) => {
  const { Endpoint, Method } = ApiRoutes.Users.Delete(id);
  const response = await httpClient({
    url: Endpoint,
    method: Method,
  });
  return response.data;
};
