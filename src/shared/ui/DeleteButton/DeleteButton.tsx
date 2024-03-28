import React from "react";
import "./delete-button.css";

interface ButtonProps {
  handleDeleteClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function DeleteButton({ handleDeleteClick }: ButtonProps) {
  return (
    <button className="delete-button" onClick={handleDeleteClick}>
      <i className="fa-solid fa-trash"></i>
    </button>
  );
}
