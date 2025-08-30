// src/api/cartApi.js
import httpClient from "../utils/HttpClient";
import { ApiRoutes } from "../utils/endpoints";

// Get cart items
export const fetchCart = async () => {
  const { Endpoint, Method } = ApiRoutes.Cart.All;
  const response = await httpClient({
    url: Endpoint,
    method: Method,
  });
  return response.data;
};

// Add item to cart
export const addToCart = async (payload) => {
  const { Endpoint, Method } = ApiRoutes.Cart.Add;
  const response = await httpClient({
    url: Endpoint,
    method: Method,
    data: payload,
  });
  return response.data;
};

// Remove item from cart
export const removeFromCart = async (id) => {
  const { Endpoint, Method } = ApiRoutes.Cart.Remove(id);
  const response = await httpClient({
    url: Endpoint,
    method: Method,
  });
  return response.data;
};

// Update cart item
export const updateCartItem = async (id, payload) => {
  const { Endpoint, Method } = ApiRoutes.Cart.Update(id);
  const response = await httpClient({
    url: Endpoint,
    method: Method,
    data: payload,
  });
  return response.data;
};
