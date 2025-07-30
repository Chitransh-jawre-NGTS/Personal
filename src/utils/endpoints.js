// src/utils/apiRoutes.js
export const httpMethod = {
  Get: "GET",
  Post: "POST",
  Put: "PUT",
  Patch: "PATCH",
  Delete: "DELETE",
};

export const ApiRoutes = {
  Auth: {
    Login: {
      Endpoint: "/auth/login",
      Method: httpMethod.Post,
    },
  },
  Products: {
    All: {
      Endpoint: "products",
      Method: httpMethod.Get,
    },
    ById: (id) => ({
      Endpoint: `products/${id}`,
      Method: httpMethod.Get,
    }),
    Search: (query) => ({
      Endpoint: `products/search?q=${query}`,
      Method: httpMethod.Get,
    }),
  },

};

// src/utils/apiRoutes.js

// export const httpMethod = {
//   Get: "GET",
//   Post: "POST",
//   Put: "PUT",
//   Patch: "PATCH",
//   Delete: "DELETE",
// };

// const BASE = "/api"; // Prefix to match your backend's base route

// export const ApiRoutes = {
//   Auth: {
//     Login: {
//       Endpoint: `${BASE}/auth/login`,
//       Method: httpMethod.Post,
//     },
//     Register: {
//       Endpoint: `${BASE}/auth/register`,
//       Method: httpMethod.Post,
//     },
//   },

//   Products: {
//     All: {
//       Endpoint: `${BASE}/products`,
//       Method: httpMethod.Get,
//     },
//     ById: (id) => ({
//       Endpoint: `${BASE}/products/${id}`,
//       Method: httpMethod.Get,
//     }),
//     Search: (query) => ({
//       Endpoint: `${BASE}/products/search?q=${query}`,
//       Method: httpMethod.Get,
//     }),
//     Create: {
//       Endpoint: `${BASE}/products`,
//       Method: httpMethod.Post,
//     },
//     Update: (id) => ({
//       Endpoint: `${BASE}/products/${id}`,
//       Method: httpMethod.Put,
//     }),
//     Delete: (id) => ({
//       Endpoint: `${BASE}/products/${id}`,
//       Method: httpMethod.Delete,
//     }),
//   },

//   Users: {
//     All: {
//       Endpoint: `${BASE}/users`,
//       Method: httpMethod.Get,
//     },
//     ById: (id) => ({
//       Endpoint: `${BASE}/users/${id}`,
//       Method: httpMethod.Get,
//     }),
//     Delete: (id) => ({
//       Endpoint: `${BASE}/users/${id}`,
//       Method: httpMethod.Delete,
//     }),
//   },

//   Orders: {
//     All: {
//       Endpoint: `${BASE}/orders`,
//       Method: httpMethod.Get,
//     },
//     ById: (id) => ({
//       Endpoint: `${BASE}/orders/${id}`,
//       Method: httpMethod.Get,
//     }),
//   },

//   // Add more modules here as your backend grows
// };
