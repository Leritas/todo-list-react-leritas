import "./delete-button.css";

export function DeleteButton({ handleDeleteClick }) {
  return (
    <button className="delete-button" onClick={handleDeleteClick}>
      <i className="fa-solid fa-trash"></i>
    </button>
  );
}
