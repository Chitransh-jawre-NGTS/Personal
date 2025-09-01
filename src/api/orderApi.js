import httpClient from "../utils/HttpClient";
import { ApiRoutes } from "../utils/apiRoutes"; // ✅ fix path

// Fetch all orders for a user
export const fetchAllOrders = async (userId) => {
  const { Endpoint, Method } = ApiRoutes.Orders.All(userId);
  const res = await httpClient({ url: Endpoint, method: Method });
  return res.data;
};

// Fetch single order by id & userId
export const fetchOrderById = async (orderId, userId) => {
  const { Endpoint, Method } = ApiRoutes.Orders.ById(orderId, userId);
  const res = await httpClient({ url: Endpoint, method: Method });
  return res.data;
};

// Update order status
export const updateOrderStatus = async (orderId, userId, payload) => {
  const { Endpoint, Method } = ApiRoutes.Orders.UpdateStatus(orderId, userId);
  const res = await httpClient({ url: Endpoint, method: Method, data: payload });
  return res.data;
};
