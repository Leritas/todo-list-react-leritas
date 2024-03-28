import React from "react";
import Popup from "reactjs-popup";
import "./popupforbutton.css";

interface PopupProps {
  children: React.ReactNode;
  triggerButtonIcon: React.JSX.Element;
  triggerButtonText: string;
}

export function PopupForButton({
  children,
  triggerButtonIcon,
  triggerButtonText,
}: PopupProps) {
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
