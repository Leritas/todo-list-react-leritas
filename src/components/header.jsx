import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <nav>
      <Link to="/">
        <img src="./images/todo-logo.png" alt="logo" className="logo" />
      </Link>
      <ul>
        <li className="navItem">
          <NavLink to="/">Список</NavLink>
        </li>

        <li className="navItem">
          <NavLink to="/history">История</NavLink>
        </li>

        <li className="navItem">
          {" "}
          <NavLink to="/profile">Авторизация </NavLink>
        </li>
      </ul>
    </nav>
  );
}
