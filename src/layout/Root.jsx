import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Root() {
  return (
    <>
      <header>
        <Navbar to="/">Home Page</Navbar>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
