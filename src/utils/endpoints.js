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
