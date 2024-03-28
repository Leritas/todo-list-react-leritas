import { PopupForButton } from "src/feature/PopupForButton";
import { useTodo } from "src/entities/todo";

export function ClearHistory() {
  const { clearAllDeleted } = useTodo();
  return (
    <PopupForButton
      triggerButtonText="Очистить историю"
      triggerButtonIcon={<></>}
    >
      <button onClick={clearAllDeleted} style={{ color: "var(--accent-color" }}>
        ДА
      </button>
    </PopupForButton>
  );
}
