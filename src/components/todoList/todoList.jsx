import { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import TodoItem from "./todoItem";

export default function TodoList() {
  const [mainInputValue, setMainInputValue] = useState("");
  const [listOfTodos, setListOfTodos] = useState([]);

  useEffect(() => {
    setListOfTodos(JSON.parse(localStorage.getItem("localListOfTodos")));
  }, []);

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

  function handleAllDoneClick() {
    let incomplete = 0;
    let newListOfTodo = [...listOfTodos];
    newListOfTodo.map((todo) => {
      if (!todo.completed) {
        incomplete++;
      }
    });
    if (incomplete) {
      newListOfTodo.map((todo) => (todo.completed = true));
    } else {
      newListOfTodo.map((todo) => (todo.completed = false));
    }

    setListOfTodos(newListOfTodo);
    localStorage.setItem("localListOfTodos", JSON.stringify(newListOfTodo));
  }

  function handleDeleteAllClick() {
    //something for history page
    ///
    //
    //
    setListOfTodos([]);
    localStorage.setItem("localListOfTodos", JSON.stringify([]));
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
        {listOfTodos.length ? (
          <div className="list-control-buttons">
            <Popup
              trigger={
                <button className="done-all">
                  <i className="fa-solid fa-square-check"></i> Отметить всё
                </button>
              }
            >
              <div className="popup-bg done-all">
                <div className="popup-message">Уверены?</div>
                <button className="done-all" onClick={handleAllDoneClick}>
                  ДА
                </button>
              </div>
            </Popup>
            <Popup
              trigger={
                <button className="delete-all">
                  Удалить всё <i className="fa-solid fa-trash"></i>
                </button>
              }
            >
              <div className="popup-bg delete-all">
                <button className="delete-all" onClick={handleDeleteAllClick}>
                  ДА
                </button>
                <div className="popup-message">Уверены?</div>
              </div>
            </Popup>
          </div>
        ) : (
          <div></div>
        )}

        <ul>{listItems}</ul>
      </div>
    </div>
  );
}
