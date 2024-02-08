import api from "./api";

const nutritionApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getNutrition: builder.query({
      query: () => "list?api_key=0mcdtqHvYNIdqbOPdaNzV9OAkFTCHG8XggMCC5EC",
    }),
    getSearch: builder.query({
      query: (ingredient) =>
        `search?api_key=0mcdtqHvYNIdqbOPdaNzV9OAkFTCHG8XggMCC5EC&query=${ingredient}`,
    }),
  }),
});
export const { useGetNutritionQuery, useGetSearchQuery } = nutritionApi;
