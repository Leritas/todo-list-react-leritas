import React from "react";
export default function HistoryItem({ historyItem, index, handleDeleteClick }) {
  return (
    <li>
      <span
        className={
          historyItem.completed
            ? "completed history-item-text"
            : "history-item-text"
        }
      >
        {historyItem.text}
      </span>
      <span className="date">{historyItem.date}</span>
      <button
        className="delete-button"
        data-index={index}
        onClick={handleDeleteClick}
      >
        <i className="fa-solid fa-trash" data-index={index}></i>
      </button>
    </li>
  );
}
