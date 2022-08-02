import React from "react";
import logoPath from "../images/logo.png";

function Header() {
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
      </header>
    </>
  );
}

export default Header;
