import { PopupForButton } from "src/feature/PopupForButton";
import { useTodo } from "src/entities/todo";

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
