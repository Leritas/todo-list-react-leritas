import { useState } from "react";

export default function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [listOfTodos, setListOfTodos] = useState([]);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      setListOfTodos([...listOfTodos, e.target.value]);
      setInputValue("");
    }
  }

  const listItems = listOfTodos.map((todo) => <li>{todo}</li>);

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
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>

      <div className="todo-list">
        <ol>{listItems}</ol>
      </div>
    </div>
  );
}
