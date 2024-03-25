import { useState } from "react";
import { useTodo } from "src/entities/todo";

export default function CreateTodo() {
  const [inputValue, setInputValue] = useState("");
  const { addTodo } = useTodo();

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleKeyDownEnter(e) {
    if (e.key === "Enter") {
      addTodo(e.target.value);
      setInputValue("");
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
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDownEnter}
      />
    </div>
  );
}
