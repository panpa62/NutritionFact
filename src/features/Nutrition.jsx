import { useGetNutritionQuery } from "../store/nutritionSlice";
import FoodNutrients from "./FoodNutritions";
import "./Nutrition.scss";

export default function Nutrition() {
  const { data, isLoading } = useGetNutritionQuery();
  return isLoading ? (
    <h1>Is Loading ...</h1>
  ) : (
    <>
      <main>
        <ul className="nutrition-grid">
          {data.map((item) => (
            <li key={item.fdcId} className="nutrition-card">
              <h3>{item.description}</h3>
              <FoodNutrients
                key={item.fdcId}
                foodNutrients={item.foodNutrients}
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
