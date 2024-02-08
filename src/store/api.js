import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.nal.usda.gov/fdc/v1/foods/",
  }),
  endpoints: () => ({}),
});

export default api;
