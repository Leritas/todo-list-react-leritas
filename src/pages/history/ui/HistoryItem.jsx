import React from "react";
import { useTodo } from "../../../entities/todo/use-todo/useTodo";
import { DeleteButton } from "../../../shared/ui/delete-button/DeleteButton";

export default function HistoryItem({ item, index }) {
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
      <span className="date">{item.date}</span>
      <DeleteButton
        handleDeleteClick={() => {
          removeFromDeleted(index);
        }}
      />
    </li>
  );
}
