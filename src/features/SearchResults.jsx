import { useGetIngredientQuery } from "../store/nutritionSlice";

export default function SearchResults(searchWords) {
  console.log(searchWords.searchWords);
  const { data, isLoading, isError } = useGetIngredientQuery(
    searchWords.searchWords
  );
  console.log(data.foods);
  console.log("There is an error message: ");
  console.log(data.isError);

  return isLoading ? (
    <div>Loading ...</div>
  ) : (
    <div>
      <ul className="search-grid">
        {data.foods.map((item) => (
          <li key={item.fdcId} className="search-card">
            <h3>{item.description}</h3>
            <h4>{item.foodCategory}</h4>
            <h4>
              {item.foodNutients.map((nutrient) => (
                <div>
                  <p>{nutrient.NutrientName}</p>
                  <p>{nutrient.unitName}</p>
                  <p>{nutrient.value}</p>
                </div>
              ))}
            </h4>
          </li>
        ))}
      </ul>
    </div>
  );
}
