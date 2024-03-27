import Popup from "reactjs-popup";
import "./popupforbutton.css";

export function PopupForButton({
  children,
  triggerButtonIcon,
  triggerButtonText,
}) {
  return (
    <Popup
      trigger={
        <button className="trigger-button">
          {triggerButtonIcon}
          {triggerButtonText}
        </button>
      }
    >
      <div className="popup-bg">
        <div className="popup-message">Уверены?</div>
        {children}
      </div>
    </Popup>
  );
}
