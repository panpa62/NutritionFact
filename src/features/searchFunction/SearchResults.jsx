import { useGetIngredientQuery } from "../../store/nutritionSlice";
import "../home/home.scss";

export default function SearchResults(searchWords) {
  const searchKey = searchWords.searchWords;
  const { data, isLoading } = useGetIngredientQuery(searchKey);
  console.log(data);
  return isLoading ? (
    <div>Loading ...</div>
  ) : (
    <div>
      <ul className="search-grid">
        {data.foods?.map((item) => (
          <li key={item.fdcId} className="search-card">
            <h3>{item.description}</h3>
            <h4>{item.foodCategory}</h4>
            <h4>
              {item.foodNutrients.map((nutrient) => (
                <div>
                  <p>Nutrient Name: {nutrient.nutrientName}</p>
                  <p>Unit: {nutrient.unitName}</p>
                  <p>Value: {nutrient.value}</p>
                </div>
              ))}
            </h4>
          </li>
        ))}
      </ul>
    </div>
  );
}
