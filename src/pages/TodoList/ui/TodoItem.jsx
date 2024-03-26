import { useTodo } from "src/entities/todo/use-todo/useTodo";
import { DeleteButton } from "src/shared/ui/DeleteButton";

export function TodoItem({ todo, todoKey }) {
  const { removeTodo, toggleTodo } = useTodo();
  return (
    <li>
      <div className="text-with-checkbox">
        <input
          type="checkbox"
          name="completed"
          checked={todo.completed}
          onChange={() => {
            toggleTodo(todoKey);
          }}
        />
        <span className={todo.completed ? "completed todo-text" : "todo-text"}>
          {todo.text}
        </span>
      </div>
      <span className="date">
        {todo.date}
        <DeleteButton
          handleDeleteClick={() => {
            removeTodo(todoKey);
          }}
        />
      </span>
    </li>
  );
}
