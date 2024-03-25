import { PopupForButton } from "src/feature/PopupForButton";
import { useTodo } from "src/entities/todo";
import { IconCheck } from "src/shared/ui/IconCheck";
import { IconTrash } from "src/shared/ui/IconTrash";
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
          className="blue-yes-button"
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
          className="red-yes-button"
        >
          ДА
        </button>
      </PopupForButton>
    </div>
  );
}
