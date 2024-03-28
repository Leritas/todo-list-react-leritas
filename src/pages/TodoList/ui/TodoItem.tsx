import { useTodo } from "src/entities/todo/";
import { Todo } from "src/entities/todo/";
import { DeleteButton } from "src/shared/ui/DeleteButton";

interface TodoItemProps {
  todo: Todo;
  todoKey: number;
}

export function TodoItem({ todo, todoKey }: TodoItemProps) {
  const { removeTodo, toggleTodo } = useTodo();
  return (
    <li>
      <div className="text-with-checkbox">
        <input
          type="checkbox"
          name="completed"
          checked={todo.completed}
          onChange={() => toggleTodo(todoKey)}
        />
        <span className={todo.completed ? "completed todo-text" : "todo-text"}>
          {todo.text}
        </span>
      </div>
      <span className="date">
        {todo.date}
        <DeleteButton handleDeleteClick={() => removeTodo(todoKey)} />
      </span>
    </li>
  );
}
