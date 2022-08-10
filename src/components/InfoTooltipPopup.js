import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import "../index.css";

function InfoTooltipPopup({ popup, onClose, name }) {
  return (
    <section className={`popup popup_infotooltip ${popup ? "popup_opened" : ""}`}>
      <div className="popup__block">
        <button
          className="popup__close-btn"
          onClick={onClose}
          type="reset"
        ></button>
        <div name="form" className="popup__infotooltip-container">
          <div
            className="popup__infotooltip-logo"
          />
          <h1 className="popup__infotooltip-title">Вы успешно зарегистрировались!</h1>
        </div>
      </div>
    </section>
  );
}
export default InfoTooltipPopup;
