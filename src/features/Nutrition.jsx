import { useState } from "react";
import { useGetNutritionQuery } from "../store/nutritionSlice";
import FoodNutrients from "./FoodNutritions";

export default function Nutrition() {
  const { data, isLoading } = useGetNutritionQuery();
  return isLoading ? (
    <h1>Is Loading ...</h1>
  ) : (
    <>
      <main>
        <h1>Nutrition Info Page</h1>
        <ul className="nutrition-grid">
          {data.map((item) => (
            <div key={item.fdcId}>
              <h3>{item.description}</h3>
              <h4>Nutritions: </h4>
              <FoodNutrients
                key={item.fdcId}
                foodNutrients={item.foodNutrients}
              />
            </div>
          ))}
        </ul>
      </main>
    </>
  );
}
