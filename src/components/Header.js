import { React } from "react";
import logoPath from "../images/logo.png";
import { Route, Switch } from "react-router-dom";

function Header({ onLogout, userInfo }) {
  return (
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
            <a className="header__link" href="/sign-up">
              Регистрация
            </a>
          </Route>
          <Route path="/sign-up">
            <a className="header__link" href="/sign-in">
              Войти
            </a>
          </Route>
          <Route exact path="/">
            <div className="header__email">{userInfo?.email}</div>
            <a className="header__link" onClick={onLogout} href="/sign-in">
              Выйти
            </a>
          </Route>
        </Switch>
      </header>
  );
}

export default Header;
