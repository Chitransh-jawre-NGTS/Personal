// src/utils/apiRoutes.js

export const httpMethod = {
  Get: "GET",
  Post: "POST",
  Put: "PUT",
  Patch: "PATCH",
  Delete: "DELETE",
};

// ✅ Base prefix for your backend API
// Example: If backend runs at https://api.myecom.com/api
// then set VITE_API_BASE_URL="https://api.myecom.com/api" in .env
const BASE = "/api";

export const ApiRoutes = {
  // 🔐 Authentication routes
  Auth: {
    Login: {
      Endpoint: `${BASE}/signin`,
      Method: httpMethod.Post,
    },
    Register: {
      Endpoint: `${BASE}/auth/register`,
      Method: httpMethod.Post,
    },
    Profile: {
      Endpoint: `${BASE}/auth/profile`,
      Method: httpMethod.Get,
    },
  },

  // 🛍️ Product routes
  Products: {
    All: {
      Endpoint: `${BASE}/products`,
      Method: httpMethod.Get,
    },
    ById: (id) => ({
      Endpoint: `${BASE}/products/${id}`,
      Method: httpMethod.Get,
    }),
    Search: (query) => ({
      Endpoint: `${BASE}/products/search?q=${query}`,
      Method: httpMethod.Get,
    }),
    Create: {
      Endpoint: `${BASE}/products`,
      Method: httpMethod.Post,
    },
    Update: (id) => ({
      Endpoint: `${BASE}/products/${id}`,
      Method: httpMethod.Put,
    }),
    Delete: (id) => ({
      Endpoint: `${BASE}/products/${id}`,
      Method: httpMethod.Delete,
    }),
  },

  // 👤 User management routes
  Users: {
    All: {
      Endpoint: `${BASE}/users`,
      Method: httpMethod.Get,
    },
    ById: (id) => ({
      Endpoint: `${BASE}/users/${id}`,
      Method: httpMethod.Get,
    }),
    Update: (id) => ({
      Endpoint: `${BASE}/users/${id}`,
      Method: httpMethod.Put,
    }),
    Delete: (id) => ({
      Endpoint: `${BASE}/users/${id}`,
      Method: httpMethod.Delete,
    }),
  },

  // 📦 Order routes
  Orders: {
    All: {
      Endpoint: `${BASE}/orders`,
      Method: httpMethod.Get,
    },
    ById: (id) => ({
      Endpoint: `${BASE}/orders/${id}`,
      Method: httpMethod.Get,
    }),
    Create: {
      Endpoint: `${BASE}/orders`,
      Method: httpMethod.Post,
    },
    UpdateStatus: (id) => ({
      Endpoint: `${BASE}/orders/${id}/status`,
      Method: httpMethod.Patch,
    }),
  },

  // 🛒 Cart routes (optional if backend manages cart)
  Cart: {
    Get: {
      Endpoint: `${BASE}/cart`,
      Method: httpMethod.Get,
    },
    Add: {
      Endpoint: `${BASE}/cart/add`,
      Method: httpMethod.Post,
    },
    Remove: (id) => ({
      Endpoint: `${BASE}/cart/remove/${id}`,
      Method: httpMethod.Delete,
    }),
    Clear: {
      Endpoint: `${BASE}/cart/clear`,
      Method: httpMethod.Delete,
    },
  },
};
