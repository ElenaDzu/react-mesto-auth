import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Login({ onLogin }) {


  return (
    <section className="page">
      <h1 className="page__title">Вход</h1>
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
        Войти
      </button>
    </section>
  );
}

export default Login;
