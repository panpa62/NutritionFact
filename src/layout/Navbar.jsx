import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <h1>Nutrition Fact</h1>
      <li>
        <NavLink to="/"> Home </NavLink>
      </li>
    </nav>
  );
}
