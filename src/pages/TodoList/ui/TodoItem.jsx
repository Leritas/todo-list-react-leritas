import { useTodo } from "src/entities/todo/use-todo/useTodo";
import { DeleteButton } from "src/shared/ui/DeleteButton";

export default function TodoItem({ todo, todoKey }) {
  const { removeTodo, toggleTodo } = useTodo();
  return (
    <li>
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
      <span className="date">{todo.date}</span>
      <DeleteButton
        handleDeleteClick={() => {
          removeTodo(todoKey);
        }}
      />
    </li>
  );
}
