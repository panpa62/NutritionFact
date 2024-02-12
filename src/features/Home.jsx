import { useState } from "react";
import SearchResults from "./SearchResults";
import "./Home.scss";

export default function Home() {
  const [searchWords, setSearchWords] = useState("");
  const [searchSubmitted, setSearchSubmitted] = useState(false);

  const handleInputChange = async (e) => {
    setSearchWords(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearchSubmitted(true);
  };

  return (
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
        <form>
          <label htmlFor="search"></label>
          <input
            className="searchText"
            id="search"
            type="text"
            value={searchWords}
            onChange={handleInputChange}
            placeholder="Search ingredient here..."
          ></input>
          <button type="submit" onClick={handleSubmit}>
            Search
          </button>
        </form>
      </section>

      {searchSubmitted && (
        <div>
          {searchWords ? (
            <p>
              <b>Showing results for: {searchWords}</b>
              <SearchResults searchWords={searchWords} />
            </p>
          ) : (
            <p>
              <b>Please search ingredient provided.</b>
            </p>
          )}
        </div>
      )}
    </>
  );
}
