export default function TodoItem({
  todo,
  index,
  handleCheckboxCompletedChange,
  handleDeleteClick,
}) {
  return (
    <li>
      <input
        type="checkbox"
        name="completed"
        id={index}
        checked={todo.completed}
        onChange={handleCheckboxCompletedChange}
      />
      <h3 className={todo.completed ? "completed" : ""}>{todo.text}</h3>
      <span>{todo.date}</span>
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
