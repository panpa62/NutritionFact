import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Root() {
  return (
    <>
      <header>
        <h1>Nutrition Fact</h1>
        <Navbar to="/">Home</Navbar>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
