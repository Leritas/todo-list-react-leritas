import { Todo, useTodo } from "src/entities/todo";
import { DeleteButton } from "src/shared/ui/DeleteButton";

interface HistoryItemProps {
  todo: Todo;
  todoKey: number;
}

export function HistoryItem({ todo, todoKey }: HistoryItemProps) {
  const { removeFromDeleted } = useTodo();

  return (
    <li>
      <span
        className={
          todo.completed ? "completed history-item-text" : "history-item-text"
        }
      >
        {todo.text}
      </span>
      <span className="date">
        {todo.date}
        <DeleteButton handleDeleteClick={() => removeFromDeleted(todoKey)} />
      </span>
    </li>
  );
}
