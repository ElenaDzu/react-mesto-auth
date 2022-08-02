import React from "react";

function PopupWithForm({ name, title, isOpen, onClose, children, text, onSubmit }) {
  return (
    <section className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__block">
        <button
          className="popup__close-btn popup__close-btn_add"
          onClick={onClose}
          type="reset"
        ></button>
        <form
          name={name}
          className="popup__container"
          onSubmit={onSubmit}
          noValidate
        >
          <h2 className="popup__title">{title}</h2>
          {children}
          <button
            type="submit"
            defaultValue="Сбросить"
            className="popup__save-btn"
          >
            {text}
          </button>
        </form>
      </div>
    </section>
  );
}
export default PopupWithForm;
