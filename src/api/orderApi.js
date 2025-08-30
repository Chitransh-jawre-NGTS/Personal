// src/api/orderApi.js
import httpClient from "../utils/HttpClient";
import { ApiRoutes } from "../utils/endpoints";

// Fetch all orders
export const fetchAllOrders = async () => {
  const { Endpoint, Method } = ApiRoutes.Orders.All;
  const response = await httpClient({
    url: Endpoint,
    method: Method,
  });
  return response.data;
};

// Fetch single order
export const fetchOrderById = async (id) => {
  const { Endpoint, Method } = ApiRoutes.Orders.ById(id);
  const response = await httpClient({
    url: Endpoint,
    method: Method,
  });
  return response.data;
};

// Create order
export const createOrder = async (payload) => {
  const { Endpoint, Method } = ApiRoutes.Orders.Create;
  const response = await httpClient({
    url: Endpoint,
    method: Method,
    data: payload,
  });
  return response.data;
};

// Update order
export const updateOrder = async (id, payload) => {
  const { Endpoint, Method } = ApiRoutes.Orders.Update(id);
  const response = await httpClient({
    url: Endpoint,
    method: Method,
    data: payload,
  });
  return response.data;
};
