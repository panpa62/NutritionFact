import { useParams } from "react-router-dom";
import { useGetIngredientQuery } from "../../store/nutritionSlice";
import "./searchIngredient.scss";

export function SearchedIngredientDetails() {
  const id = useParams();
  const { data, isLoading } = useGetIngredientQuery(id.id);
  const ingredient = data.foods[0];
  //const fdNutrients = data.foods[0].foodNutrients;
  //console.log(fdNutrients);
  console.log(ingredient);
  return isLoading ? (
    <div>Just a moment ...</div>
  ) : (
    <main>
      <div className="searchedIngredient-grid">
        {ingredient?.foodNutrients.map((item) => (
          <li key={item.fdcId} className="searchedIngredient-card">
            <p>{item.nutrientName}</p>
            <p>Amount: {item.value}</p>
            <p>Unit: {item.unitName}</p>
          </li>
        ))}
      </div>
    </main>
  );
}
