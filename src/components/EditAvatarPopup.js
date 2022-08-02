import { React, useRef } from "react";
import "../index.css";
import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Обновить аватар"
      name="update-avatar"
      text="Сохранить"
    >
      <input
        id="link-inp"
        required
        className="popup__text popup__text_value_link"
        defaultValue=""
        type="url"
        name="link"
        minLength="2"
        placeholder="Введите ссылку на изображение"
        ref={avatarRef}
      />
      <span className="popup__input-error link-inp-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
