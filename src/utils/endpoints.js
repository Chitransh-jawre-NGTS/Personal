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
      Endpoint: `${BASE}/signup`,
      Method: httpMethod.Post,
    },
    Profile: {
      Endpoint: `${BASE}/auth/profile`,
      Method: httpMethod.Get,
    },
    Logout: {
      Endpoint: `${BASE}/signout`,
      Method: httpMethod.Post,
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
  All: (userId) => ({
    Endpoint: `${BASE}/order/all/${userId}`, // matches router.get("/order/all/:userId")
    Method: httpMethod.Get,
  }),
  ById: (orderId, userId) => ({
    Endpoint: `${BASE}/order/${orderId}/${userId}`, // matches router.get("/order/:orderId/:userId")
    Method: httpMethod.Get,
  }),
  Create: (userId) => ({
    Endpoint: `${BASE}/order/create/${userId}`, // matches router.post("/order/create/:userId")
    Method: httpMethod.Post,
  }),
  UpdateStatus: (orderId, userId) => ({
    Endpoint: `${BASE}/order/${orderId}/status/${userId}`, // matches router.put("/order/:orderId/status/:userId")
    Method: httpMethod.Put,
  }),
  Status: (userId) => ({
    Endpoint: `${BASE}/order/status/${userId}`, // matches router.get("/order/status/:userId")
    Method: httpMethod.Get,
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
      Endpoint: `${BASE}/cart/${id}`,
      Method: httpMethod.Delete,
    }),
    Clear: {
      Endpoint: `${BASE}/cart/clear`,
      Method: httpMethod.Delete,
    },
  },

  Wishlist: {
    Get: { Endpoint: `${BASE}/wishlist`, Method: httpMethod.Get },
    Add: { Endpoint: `${BASE}/add`, Method: httpMethod.Post },
    Remove: (id) => ({
      Endpoint: `${BASE}/wishlist/remove/${id}`,
      Method: httpMethod.Delete,
    }),
  },
};
