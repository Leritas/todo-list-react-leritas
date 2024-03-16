import { useState } from "react";

export default function TodoList() {
  const [mainInputValue, setMainInputValue] = useState("");
  const [listOfTodos, setListOfTodos] = useState(
    JSON.parse(localStorage.getItem("localListOfTodos")) || ""
  );

  const monthList = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];

  function handleMainInputChange(e) {
    setMainInputValue(e.target.value);
  }

  function handleKeyDownEnter(e) {
    if (e.key === "Enter") {
      let thisDate = new Date();
      let wasAdded =
        "Добавлено " +
        thisDate.getDate() +
        " " +
        monthList[thisDate.getMonth()] +
        " " +
        thisDate.getFullYear() +
        " в " +
        thisDate.getHours() +
        ":" +
        thisDate.getMinutes();

      let updatedList = [
        ...listOfTodos,
        { date: wasAdded, completed: false, text: e.target.value },
      ];

      setListOfTodos(updatedList);
      localStorage.setItem("localListOfTodos", JSON.stringify(updatedList));
      setMainInputValue("");
    }
  }

  function handleDeleteClick(e) {}

  function handleChangeClick(e) {}

  let listItems;

  if (listOfTodos != "") {
    listItems = listOfTodos.map((todo, index) => (
      <li key={index}>
        <h3>{todo.text}</h3>
        <span>{todo.date}</span>
        <button onClick={handleDeleteClick}>delete</button>
        <button onClick={handleChangeClick}>change</button>
      </li>
    ));
  }

  return (
    <div className="todo-container">
      <div className="todo-input">
        <label htmlFor="add-todo">
          <h1>Запланируйте что угодно!</h1>
        </label>
        <br />
        <input
          type="text"
          name="todo"
          id="add-todo"
          value={mainInputValue}
          onChange={handleMainInputChange}
          onKeyDown={handleKeyDownEnter}
        />
      </div>

      <div className="todo-list">
        <ol>{listItems}</ol>
      </div>
    </div>
  );
}
