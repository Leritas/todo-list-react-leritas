import { useTodo } from "../../../entities/todo/use-todo/useTodo";
import { DeleteButton } from "../../../shared/ui/delete-button";

export default function TodoItem({ todo, index }) {
  const { removeTodo, toggleTodo } = useTodo();
  return (
    <li>
      <input
        type="checkbox"
        name="completed"
        id={index}
        checked={todo.completed}
        onChange={() => {
          toggleTodo(index);
        }}
      />
      <span className={todo.completed ? "completed todo-text" : "todo-text"}>
        {todo.text}
      </span>
      <span className="date">{todo.date}</span>
      <DeleteButton
        handleDeleteClick={() => {
          removeTodo(index);
        }}
      />
    </li>
  );
}
