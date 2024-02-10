import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import { useGetIngredientQuery } from "../store/nutritionSlice";
import "./Home.scss";

export default function Home() {
  //const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const { data: foods, isLoading } = useGetIngredientQuery(search);
  //console.log(foods);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(search);
  };
  return isLoading ? (
    <h1>Fetching Data ...</h1>
  ) : (
    <>
      <main className="home-main">
        <section className="home-intro">
          <h4>
            "Welcome to the Nutrition Facts website. You can explore nutritional
            information by either navigating to the 'Nutrition' tab or by
            searching for specific foods using the search box. Simply enter the
            name of the food, for example, 'broccoli', into the search box, and
            you'll receive the nutritional facts directly on the same page."
          </h4>
        </section>
      </main>
      <section className="home-search">
        <form onSubmit={handleSubmit}>
          <label htmlFor="search"></label>
          <input
            className="searchText"
            id="search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search ingredient here..."
          ></input>
          <button>Search</button>
        </form>
      </section>
      {/*<section>
        <ul className="search-grid">
          {foods.map((item) => (
            <li key={item.fdcId} className="search-card">
              <h3>{item.description}</h3>
            </li>
          ))}
        </ul>
      </section>
          */}
    </>
  );
}
