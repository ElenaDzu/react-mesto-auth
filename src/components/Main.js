import React from "react";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onCardLike,
  onCardDelete,
  cards,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
      <main className="content">
        <section className="profile">
          <div
            className="profile__avatar"
            style={{ backgroundImage: `url(${currentUser.avatar})` }}
            onClick={onEditAvatar}
          ></div>
          <div className="profile__info">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button
              className="profile__edit-btn"
              onClick={onEditProfile}
              type="button"
            ></button>
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>
          <button
            className="profile__add-btn"
            onClick={onAddPlace}
            type="button"
          ></button>
        </section>
        <div className="elements">
          <ul className="elements-list">
            {cards.map((card) => (
              <Card
                onCardLike={onCardLike}
                onCardClick={onCardClick}
                onCardDelete={onCardDelete}
                key={card._id}
                card={card}
              />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default Main;
