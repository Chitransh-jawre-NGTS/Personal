// src/api/productApi.js
import httpClient from "../utils/HttpClient";
import { ApiRoutes } from "../utils/endpoints";

export const fetchAllProducts = async () => {
  const { Endpoint, Method } = ApiRoutes.Products.All;
  const response = await httpClient({
    url: Endpoint,
    method: Method,
  });
  return response.data;
};

export const fetchProductById = async (id) => {
  const { Endpoint, Method } = ApiRoutes.Products.ById(id);
  const response = await httpClient({
    url: Endpoint,
    method: Method,
  });
  return response.data;
};

export const searchProducts = async (query) => {
  const { Endpoint, Method } = ApiRoutes.Products.Search(query);
  const response = await httpClient({
    url: Endpoint,
    method: Method,
  });
  return response.data;
};
