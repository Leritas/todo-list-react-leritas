import { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import TodoItem from "../components/todoList/TodoItem";
import MainInput from "../components/todoList/MainInput";
import "../components/todoList/todolist.css";

export default function TodoList() {
  const [listOfTodos, setListOfTodos] = useState([]);
  const [listOfDeleted, setListOfDeleted] = useState([]);

  useEffect(() => {
    updateListOfTodo(
      JSON.parse(localStorage.getItem("localListOfTodos")) || []
    );
  }, []);
  useEffect(() => {
    setListOfDeleted(
      JSON.parse(localStorage.getItem("localListOfDeleted")) || []
    );
  }, []);

  function updateListOfTodo(newListOfTodo) {
    setListOfTodos(newListOfTodo);
  }

  function handleCheckboxCompletedChange(e) {
    let newListOfTodo = [...listOfTodos];
    newListOfTodo[e.target.id].completed =
      !newListOfTodo[e.target.id].completed;

    updateListOfTodo(newListOfTodo);
    localStorage.setItem("localListOfTodos", JSON.stringify(newListOfTodo));
  }

  function handleDeleteClick(e) {
    let newListOfDeleted = [...listOfDeleted];
    let newListOfTodo = [...listOfTodos];
    newListOfDeleted.unshift(newListOfTodo[e.target.dataset.index]);
    newListOfTodo.splice(e.target.dataset.index, 1);

    updateListOfTodo(newListOfTodo);
    setListOfDeleted(newListOfDeleted);
    localStorage.setItem("localListOfTodos", JSON.stringify(newListOfTodo));
    localStorage.setItem(
      "localListOfDeleted",
      JSON.stringify(newListOfDeleted)
    );
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

    updateListOfTodo(newListOfTodo);
    localStorage.setItem("localListOfTodos", JSON.stringify(newListOfTodo));
  }

  function handleDeleteAllClick() {
    let reversedListOfTodo = [...listOfTodos].reverse();
    let newListOfDeleted = [].concat(reversedListOfTodo, listOfDeleted);

    setListOfDeleted(newListOfDeleted);

    updateListOfTodo([]);
    localStorage.setItem("localListOfTodos", JSON.stringify([]));
    localStorage.setItem(
      "localListOfDeleted",
      JSON.stringify(newListOfDeleted)
    );
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
    <section>
      <MainInput
        listOfTodos={listOfTodos}
        updateListOfTodo={updateListOfTodo}
      ></MainInput>

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
              <div
                className="popup-bg done-all"
                style={{ position: "absolute", left: 0 }}
              >
                <div className="popup-message">Уверены?</div>
                <button
                  className="done-all"
                  onClick={handleAllDoneClick}
                  style={{ color: "var(--lighter-blue)" }}
                >
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
              <div
                className="popup-bg delete-all"
                style={{ position: "absolute", right: 0 }}
              >
                <button
                  className="delete-all"
                  onClick={handleDeleteAllClick}
                  style={{ color: "var(--accent-color)" }}
                >
                  ДА
                </button>
                <div className="popup-message">Уверены?</div>
              </div>
            </Popup>
          </div>
        ) : (
          <div className="nothing-in-list">Пока ничего не запланировано</div>
        )}

        <ul>{listItems}</ul>
      </div>
    </section>
  );
}
