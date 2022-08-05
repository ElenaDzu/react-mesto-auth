import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register({ onRegister }) {

  return (
    <section className="Page">
      <h1>Регистрация</h1>
      <input
        required
        className="Page__text"
        defaultValue=""
        type="email"
        placeholder="Email"
      />
      <input
        required
        className="Page__text"
        defaultValue=""
        type="text"
        placeholder="Пароль"
      />
        <button type="submit" className="Page-btn">
          Зарегистрироваться
        </button>
      <div className="login__signup">
        <p>Уже зарегистрированы?</p>
        <Link to="/Register" className="signup__link">
          Войти
        </Link>
      </div>
    </section>
  );
}

export default Register;
