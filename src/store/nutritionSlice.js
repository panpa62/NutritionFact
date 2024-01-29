import api from "./api";

const nutritionApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getNutrition: builder.query({
      query: () => "",
    }),
  }),
});
export const { useGetNutritionQuery } = nutritionApi;
