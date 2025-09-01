// src/api/cartApi.js
import httpClient from "../utils/HttpClient";
import { ApiRoutes } from "../utils/endpoints";

// Get all cart items
export const fetchCartItems = async () => {
  const { Endpoint, Method } = ApiRoutes.Cart.GetCart;
  const res = await httpClient({ url: Endpoint, method: Method });
  return res.data;
};

// Add item to cart
export const addCartItem = async (item) => {
  const { Endpoint, Method } = ApiRoutes.Cart.AddToCart;
  const res = await httpClient({ url: Endpoint, method: Method, data: item });
  return res.data;
};

// Remove item from cart
export const removeCartItem = async (id) => {
  const { Endpoint, Method } = ApiRoutes.Cart.RemoveFromCart;
  const res = await httpClient({ url: `${Endpoint}/${id}`, method: Method });
  return res.data;
};

// Update quantity
export const updateCartItem = async (id, quantity) => {
  const { Endpoint, Method } = ApiRoutes.Cart.UpdateQuantity;
  const res = await httpClient({
    url: `${Endpoint}/${id}`,
    method: Method,
    data: { quantity },
  });
  return res.data;
};
