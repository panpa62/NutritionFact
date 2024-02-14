import { useParams } from "react-router-dom";
import { useGetIngredientQuery } from "../../store/nutritionSlice";
import "./searchIngredient.scss";

export function SearchedIngredientDetails() {
  const id = useParams();
  console.log(id);
  const { data, isLoading } = useGetIngredientQuery(id.id);
  console.log(data);
  const ingredient = data.foods[0];
  console.log(ingredient);
  return isLoading ? (
    <div>Loading ...</div>
  ) : (
    <main>
      <div className="searchedIngredient-grid">
        {ingredient.foodNutrients.map((item) => (
          <li className="searchedIngredient-card">
            <p>{item.nutrientName}</p>
            <p>Amount: {item.value}</p>
            <p>Unit: {item.unitName}</p>
          </li>
        ))}
      </div>
    </main>
  );
}
