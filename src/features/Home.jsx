import "./Home.scss";

export default function Home() {
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
        <h1>Search: </h1>
        <input
          className="searchText"
          type="text"
          placeholder="Enter ingredient here..."
        ></input>
      </section>
    </>
  );
}
