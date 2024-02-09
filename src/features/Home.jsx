import "./Home.scss";
import { useGetSearchQuery } from "../store/nutritionSlice";

export default function Home() {
  const { data, isLoading, isError } = useGetSearchQuery();

  return isLoading ? (
    <h1>Fetching data ...</h1>
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
        <form onSubmit={handlesubmit}>
          <label htmlFor="search"></label>
          <input
            className="searchText"
            id="search"
            type="text"
            value={search}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Search ingredient here..."
          ></input>
        </form>
      </section>
    </>
  );
}
