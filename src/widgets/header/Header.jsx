import { NavLink } from "react-router-dom";
import "./header.css";

export function Header() {
  return (
    <nav>
      <NavLink to="/">
        <img src="./images/todo-logo.png" alt="logo" className="logo" />
      </NavLink>
      <ul>
        <li className="navItem">
          <NavLink to="/">Список</NavLink>
        </li>

        <li className="navItem">
          <NavLink to="/history">История</NavLink>
        </li>
      </ul>
    </nav>
  );
}
