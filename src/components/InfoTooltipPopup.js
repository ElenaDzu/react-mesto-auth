import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function InfoTooltipPopup({ isOpen, onClose, children }) {
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Новое место"
      name="add-newcard"
      text="Создать"
    >
    </PopupWithForm>
  );
}
export default InfoTooltipPopup;