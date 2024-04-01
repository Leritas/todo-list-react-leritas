import { useState } from "react";
import { useTodo } from "src/entities/todo";

export function CreateTodo() {
  const [inputValue, setInputValue] = useState("");
  const { addTodo } = useTodo();

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
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodo(e.currentTarget.value);
            setInputValue("");
          }
        }}
      />
    </div>
  );
}
