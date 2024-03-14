import { useState } from "react";

export default function Header() {
  return (
    <nav>
      <img src="./images/todo-logo.png" alt="logo" className="logo" />
      <ul>
        <li className="navItem active">Список</li>
        <li className="navItem">История</li>
        <li className="navItem">Авторизация</li>
      </ul>
    </nav>
  );
}
