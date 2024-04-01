import React from "react";
import Popup from "reactjs-popup";
import "./popupforbutton.css";

interface PopupForButtonProps {
  children: React.ReactNode;
  triggerButtonIcon: React.JSX.Element;
  triggerButtonText: string;
}

export const PopupForButton: React.FC<PopupForButtonProps> = ({
  children,
  triggerButtonIcon,
  triggerButtonText,
}) => {
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
};
