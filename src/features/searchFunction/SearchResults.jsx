import { useGetIngredientQuery } from "../../store/nutritionSlice";
import { useState } from "react";
import "../home/home.scss";
import { Link } from "react-router-dom";

export default function SearchResults(searchWords) {
  const searchKey = searchWords.searchWords;
  const [searchInput, setSearchInput] = useState();
  const { data, isLoading } = useGetIngredientQuery(searchKey);
  const handleClick = () => {
    setSearchInput(true);
  };
  return isLoading ? (
    <div>Just a moment ...</div>
  ) : (
    <div>
      <ul className="search-grid">
        {data?.foods.map((item) => (
          <li key={item.fdcId} className="search-card">
            <h3>{item.description}</h3>
            <h4>{item.foodCategory}</h4>
            <Link to={`searchedIngredient/${item.fdcId}`}>
              <button type="button" onClick={handleClick}>
                Details
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
