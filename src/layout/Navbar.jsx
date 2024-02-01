import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="top">
      <h1>Nutrition Facts</h1>
      <menu className="navbarmenu">
        <li>
          <NavLink to="/">Home </NavLink>
        </li>
        <li>
          <NavLink to="/nutrition">Nutrition </NavLink>
        </li>
      </menu>
    </nav>
  );
}
