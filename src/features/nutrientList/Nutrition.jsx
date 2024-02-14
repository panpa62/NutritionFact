import { useGetNutritionQuery } from "../../store/nutritionSlice";
import NutritionDetails from "./NutritionDetails";
import "./nutrition.scss";

export default function Nutrition() {
  const { data, isLoading } = useGetNutritionQuery();
  return isLoading ? (
    <h3>Just a moment ...</h3>
  ) : (
    <>
      <main>
        <ul className="nutrition-grid">
          {data.map((item) => (
            <li key={item.fdcId} className="nutrition-card">
              <h3>{item.description}</h3>
              <NutritionDetails
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
