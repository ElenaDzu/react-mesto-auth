import React from "react";
import "../index.css";

function ImagePopup({ card, onClose }) {
  return (
    <section className={`popup popup_image ${card ? "popup_opened" : ""}`}>
      <div className="popup__block">
        <button
          className="popup__close-btn popup__close-btn_image"
          onClick={onClose}
          type="reset"
        ></button>
        <div name="form" className="popup__image-container">
          <img
            className="popup__image-big"
            style={{ backgroundImage: `url(${card.link})` }}
            alt={card.name}
            src={card.link}
          />
          <p className="popup__image-name">{card.name}</p>
        </div>
      </div>
    </section>
  );
}

export default ImagePopup;
