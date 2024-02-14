import { useState } from "react";
import SearchResults from "../searchFunction/SearchResults";
import "./home.scss";

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
            "Welcome to the Nutrition Facts website. Discover nutritional
            information by navigating to the Nutrition tab or searching for
            specific ingredients using the search box. You'll find detailed
            nutritional facts right here on this page."
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
        <section className="searchResultSection">
          {searchWords ? (
            <div>
              <b>Showing results for: {searchWords}</b>
              <SearchResults searchWords={searchWords} />
            </div>
          ) : (
            <p>
              <b>Please provide ingredient</b>
            </p>
          )}
        </section>
      )}
    </>
  );
}
