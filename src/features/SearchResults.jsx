import { useGetIngredientQuery } from "../store/nutritionSlice";

export default function SearchResults(searchWords) {
  const searchKey = searchWords.searchWords;
  const { data, isLoading } = useGetIngredientQuery(searchKey);

  return isLoading ? (
    <div>Loading ...</div>
  ) : (
    <div>
      <ul className="search-grid">
        {data.foods?.map((item) => (
          <li key={item.fdcId} className="search-card">
            <h3>{item.description}</h3>
            <h4>{item.foodCategory}</h4>
            {/*
            <h4>
              {item.foodNutients.map((nutrient) => (
                <div>
                  <p>{nutrient.NutrientName}</p>
                  <p>{nutrient.unitName}</p>
                  <p>{nutrient.value}</p>
                </div>
              ))}
            </h4>
              */}
          </li>
        ))}
      </ul>
    </div>
  );
}
