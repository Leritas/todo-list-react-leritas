import { PopupForButton } from "../../../feature/popup-for-button";
import { useTodo } from "../../../entities/todo/use-todo/useTodo";

export default function ClearHistory() {
  const { clearAllDeleted } = useTodo();
  return (
    <PopupForButton triggerButtonText="Очистить историю">
      <button
        onClick={() => {
          clearAllDeleted();
        }}
        style={{ color: "var(--accent-color" }}
      >
        ДА
      </button>
    </PopupForButton>
  );
}
