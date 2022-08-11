import React, { useState } from "react";
import "../index.css";

function Login({ onLogin }) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    setMessage("");
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      return;
    }
    onLogin(loginData).catch((err) =>
      setMessage(err.message || "Что-то пошло не так")
    );
  };

  return (
    <section className="page">
      <h1 className="page__title">Вход</h1>
      <form className="page" onSubmit={handleSubmit}>
        <input
          required
          name="email"
          className="page__text"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          value={loginData.email}
        />
        <input
          required
          className="page__text"
          type="password"
          placeholder="Пароль"
          onChange={handleChange}
          value={loginData.password}
          name="password"
        />
        <button type="submit" className="page__btn">
          Войти
        </button>
      </form>
    </section>
  );
}

export default Login;
