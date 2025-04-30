const API_BASE = import.meta.env.VITE_API_BASE_URL;

export const ENDPOINTS = {
  PRODUCTS: `${API_BASE}/products`,
  PRODUCT_BY_ID: (id) => `${API_BASE}/products/${id}`,
  SEARCH_PRODUCTS: (query) => `${API_BASE}/products/search?q=${query}`,
};
