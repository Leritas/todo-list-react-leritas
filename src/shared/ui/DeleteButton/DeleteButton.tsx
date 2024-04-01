import React from "react";
import "./delete-button.css";

export const DeleteButton: React.FC<{ handleDeleteClick: () => void }> = ({
  handleDeleteClick,
}) => {
  return (
    <button className="delete-button" onClick={handleDeleteClick}>
      <i className="fa-solid fa-trash"></i>
    </button>
  );
};
