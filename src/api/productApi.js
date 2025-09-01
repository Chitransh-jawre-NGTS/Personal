import httpClient from "../utils/HttpClient";
import { ApiRoutes } from "../utils/endpoints";

// 🔹 Get all products
export const getProducts = async () => {
  try {
    const { Endpoint, Method } = ApiRoutes.Products.All;
    const response = await httpClient({
      url: Endpoint,
      method: Method,
    });
    return response.data; // ✅ only return data once
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// 🔹 Get single product by ID
export const getProductById = async (id) => {
  try {
    const { Endpoint, Method } = ApiRoutes.Products.ById(id);
    const response = await httpClient({
      url: Endpoint,
      method: Method,
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    throw error;
  }
};

// 🔹 Search products
export const searchProducts = async (query) => {
  try {
    const { Endpoint, Method } = ApiRoutes.Products.Search(query);
    const response = await httpClient({
      url: Endpoint,
      method: Method,
    });
    return response.data;
  } catch (error) {
    console.error(`Error searching products with query "${query}":`, error);
    throw error;
  }
};
