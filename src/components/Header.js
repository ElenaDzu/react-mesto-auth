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
            <a className="header__link" href="/sign-up">Регистрация</a>
          </Route>
          <Route path="/sign-up">
            <a className="header__link" href="/sign-in">Войти</a>
          </Route>
          <Route path="/">
          {currentUser.email}
          <a className="header__link" href="/sign-in">Выйти</a>
          </Route>
        </Switch>
      </header>
    </>
  );
}

export default Header;
