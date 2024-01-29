import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://api.nal.usda.gov/fdc/v1/foods/list?api_key=0mcdtqHvYNIdqbOPdaNzV9OAkFTCHG8XggMCC5EC",
  }),
  endpoints: () => ({}),
});

export default api;
