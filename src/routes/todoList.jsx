import { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import TodoItem from "../components/todoList/todoItem";
import MainInput from "../components/todoList/mainInput";

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
    newListOfDeleted.push(newListOfTodo[e.target.dataset.index]);
    newListOfTodo.splice(e.target.dataset.index, 1);

    console.log(newListOfDeleted);

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
    //something for history page
    ///
    //
    //
    updateListOfTodo([]);
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
    <section>
      <div className="todo-container">
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
    </section>
  );
}
