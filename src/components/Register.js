import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register({ onRegister }) {
  return (
    <section className="page">
      <h1 className="page__title">Регистрация</h1>
      <input
        required
        className="page__text"
        defaultValue=""
        type="email"
        placeholder="Email"
      />
      <input
        required
        className="page__text"
        defaultValue=""
        type="text"
        placeholder="Пароль"
      />
      <button type="submit" className="page__btn">
        Зарегистрироваться
      </button>
      <div className="page__signup">
        <p>
          Уже зарегистрированы?
          <Link to="/Register" className="page__link">
            Войти
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
