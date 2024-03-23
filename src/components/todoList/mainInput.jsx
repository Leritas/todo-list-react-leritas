import { useState } from "react";

export default function MainInput({ listOfTodos, updateListOfTodo }) {
  const [mainInputValue, setMainInputValue] = useState("");

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
        thisDate.getDate() +
        " " +
        monthList[thisDate.getMonth()] +
        " " +
        thisDate.getFullYear() +
        " в " +
        thisDate.getHours().toString().padStart(2, "0") +
        ":" +
        thisDate.getMinutes().toString().padStart(2, "0");

      let updatedList = [
        ...listOfTodos,
        { date: wasAdded, completed: false, text: e.target.value },
      ];

      updateListOfTodo(updatedList);
      localStorage.setItem("localListOfTodos", JSON.stringify(updatedList));
      setMainInputValue("");
    }
  }

  return (
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
  );
}
