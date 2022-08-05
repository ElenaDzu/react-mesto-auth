import { React, useState } from "react";
import logoPath from "../images/logo.png";
import { Route, Switch } from "react-router-dom";

function Header() {

  const [currentUser, setCurrentUser ] = useState({});

  return (
    <>
      <header className="header">
        <a href="#">
          <img
            className="header header__logo"
            src={logoPath}
            alt="Логотип mesto"
          />
        </a>
        <Switch>
          <Route path="/sign-in">
            <a href="/sign-up">Регистрация</a>
          </Route>
          <Route path="/sign-up">
            <a href="/sign-in">Войти</a>
          </Route>
          <Route path="/">
          {currentUser.email}
          <a href="/sign-in">Выйти</a>
          </Route>
        </Switch>
      </header>
    </>
  );
}

export default Header;
