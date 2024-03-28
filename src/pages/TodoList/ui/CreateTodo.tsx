import { ChangeEvent, useState } from "react";
import { useTodo } from "src/entities/todo";

export function CreateTodo() {
  const [inputValue, setInputValue] = useState("");
  const { addTodo } = useTodo();

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value as string);
  }

  function handleKeyDownEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      addTodo((e.target as HTMLInputElement).value);
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
