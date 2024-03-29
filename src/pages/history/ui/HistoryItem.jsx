import React from "react";
import { useTodo } from "src/entities/todo";
import { DeleteButton } from "src/shared/ui/DeleteButton";

export function HistoryItem({ item, itemKey }) {
  const { removeFromDeleted } = useTodo();

  return (
    <li>
      <span
        className={
          item.completed ? "completed history-item-text" : "history-item-text"
        }
      >
        {item.text}
      </span>
      <span className="date">
        {item.date}
        <DeleteButton handleDeleteClick={() => removeFromDeleted(itemKey)} />
      </span>
    </li>
  );
}
