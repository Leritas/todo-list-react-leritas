import { useState } from "react";
import TodoItem from "./todoItem";

export default function TodoList() {
  const [mainInputValue, setMainInputValue] = useState("");
  const [listOfTodos, setListOfTodos] = useState(
    JSON.parse(localStorage.getItem("localListOfTodos")) || []
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
      if (mainInputValue.length < 4) return;
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

  function handleCheckboxCompletedChange(e) {
    let newListOfTodo = [...listOfTodos];
    newListOfTodo[e.target.id].completed =
      !newListOfTodo[e.target.id].completed;

    setListOfTodos(newListOfTodo);
    localStorage.setItem("localListOfTodos", JSON.stringify(newListOfTodo));
  }

  function handleDeleteClick(e) {
    let newListOfTodo = [...listOfTodos];
    newListOfTodo.splice(e.target.dataset.index, 1);

    console.log(newListOfTodo);

    setListOfTodos(newListOfTodo);
    localStorage.setItem("localListOfTodos", JSON.stringify(newListOfTodo));
  }

  const listItems = listOfTodos.map((todo, index) => (
    <TodoItem
      todo={todo}
      index={index}
      key={index}
      handleCheckboxCompletedChange={handleCheckboxCompletedChange}
      handleDeleteClick={handleDeleteClick}
    />
  ));

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
        <ul>{listItems}</ul>
      </div>
    </div>
  );
}
