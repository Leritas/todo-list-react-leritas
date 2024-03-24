import { PopupForButton } from "../../../../feature/popup-for-button";
import { useTodo } from "../../../../entities/todo";
import { IconCheck } from "../../../../shared/ui/icon-check";
import { IconTrash } from "../../../../shared/ui/icon-trash";
import "./todolistcontrols.css";

export function TodoListControls() {
  const { removeAllTodo, toggleAlltodo } = useTodo();

  return (
    <div className="list-control-buttons">
      <PopupForButton
        triggerButtonIcon={<IconCheck />}
        triggerButtonText="ㅤОтметить всё"
      >
        <button
          onClick={() => {
            toggleAlltodo();
          }}
          style={{ color: "var(--lighter-blue)" }}
        >
          ДА
        </button>
      </PopupForButton>
      <PopupForButton
        triggerButtonIcon={<IconTrash />}
        triggerButtonText="Удалить всёㅤ"
      >
        <button
          onClick={() => {
            removeAllTodo();
          }}
          style={{ color: "var(--accent-color)" }}
        >
          ДА
        </button>
      </PopupForButton>
    </div>
  );
}
