import { React, useState, useContext, useEffect } from "react";
import "../index.css";
import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  function handleNameChange(e) {
    setName(e.target.value);
  }
  const [description, setDescription] = useState("");
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  const currentUser = useContext(CurrentUserContext);
  useEffect(() => {
    if (isOpen) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Редактировать профиль"
      name="edit"
      text="Сохранить"
    >
      <input
        id="text-input"
        required
        className="popup__text popup__text_value_name"
        type="text"
        name="name"
        minLength="2"
        maxLength="40"
        value={name || ""}
        onChange={handleNameChange}
      />
      <span className="popup__input-error text-input-error"></span>
      <input
        id="job-input"
        required
        className="popup__text popup__text_value_job"
        type="text"
        name="job"
        minLength="2"
        maxLength="200"
        value={description || ""}
        onChange={handleDescriptionChange}
      />
      <span className="popup__input-error job-input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
