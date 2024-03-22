import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <Link to="/">
        <img src="./images/todo-logo.png" alt="logo" className="logo" />
      </Link>
      <ul>
        <Link to="/">
          <li className="navItem active">Список</li>
        </Link>
        <Link to="/history">
          <li className="navItem">История</li>
        </Link>
        <Link to="/profile">
          <li className="navItem">Авторизация</li>
        </Link>
      </ul>
    </nav>
  );
}
