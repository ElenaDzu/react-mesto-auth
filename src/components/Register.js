import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Register({ onRegister}) {
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, email } = registerData;
    if (password && email)
      return onRegister(registerData).catch((err) =>
        setMessage(err.message || "Что-то пошло не так")
      );
  };

  return (
    <section className="page">
      <h1 className="page__title">Регистрация</h1>
      <form className="page" onSubmit={handleSubmit}>
        <input
          required
          className="page__text"
          type="email"
          placeholder="Email"
          value={registerData.email}
          onChange={handleChange}
          name="email"
        />
        <input
          required
          className="page__text"
          type="password"
          placeholder="Пароль"
          value={registerData.password}
          onChange={handleChange}
          name="password"
        />
        <button type="submit" className="page__btn">
          Зарегистрироваться
        </button>
      </form>
      <div className="page__signup">
        <p>
          Уже зарегистрированы?
          <Link to="/sign-in" className="page__link">
            Войти
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
