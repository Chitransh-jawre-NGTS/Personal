// src/api/reviewApi.js
import httpClient from "../utils/HttpClient";
import { ApiRoutes } from "../utils/endpoints";

// Fetch reviews of a product
export const fetchReviewsByProduct = async (productId) => {
  const { Endpoint, Method } = ApiRoutes.Reviews.ByProduct(productId);
  const response = await httpClient({
    url: Endpoint,
    method: Method,
  });
  return response.data;
};

// Add a review
export const addReview = async (payload) => {
  const { Endpoint, Method } = ApiRoutes.Reviews.Add;
  const response = await httpClient({
    url: Endpoint,
    method: Method,
    data: payload,
  });
  return response.data;
};

// Delete review
export const deleteReview = async (id) => {
  const { Endpoint, Method } = ApiRoutes.Reviews.Delete(id);
  const response = await httpClient({
    url: Endpoint,
    method: Method,
  });
  return response.data;
};
