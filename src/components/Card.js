import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `element__trash ${
    isOwn ? "element__trash_visible" : ""
  }`;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `element__icon ${
    isLiked ? "element__icon_active" : ""
  }`;
  function handleClick() {
    onCardClick(card);
  }

  function handleLike() {
    onCardLike(card);
  }

  function handleDelete() {
    onCardDelete(card);
  }

  return (
    <li className="element">
      <button
        className={cardDeleteButtonClassName}
        onClick={handleDelete}
        type="button"
      ></button>
      <img
        className="element__image"
        onClick={handleClick}
        style={{ backgroundImage: `url(${card.link})` }}
        src={card.link}
        alt={card.name}
      />
      <div className="element__place">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like">
          <button
            className={cardLikeButtonClassName}
            onClick={handleLike}
            type="button"
          ></button>
          <div className="element__counter">{card.likes.length}</div>
        </div>
      </div>
    </li>
  );
}

export default Card;
