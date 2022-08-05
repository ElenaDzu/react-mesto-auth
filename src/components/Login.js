import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Login({ onLogin }) {


  return (
    <section className="Page">
      <h1>Вход</h1>
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
        Войти
      </button>
    </section>
  );
}

export default Login;
