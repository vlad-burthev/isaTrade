import React from "react";
import "./BurgerMenu.scss";

const BurgerMenu = ({ showBurger }) => {
  return (
    <div className={`burgerMenu ${showBurger ? "showBurger" : ""}`}>
      <div className="burgerMenu-content">
        <a href="/" className="mob-header-nav-item">
          Головна
        </a>
        <a href="/#about" className="mob-header-nav-item">
          Про нас
        </a>
        <a href="/catalog" className="mob-header-nav-item">
          Каталог
        </a>
        <a href="#footer" className="mob-header-nav-item">
          Контакти
        </a>
      </div>
    </div>
  );
};

export default BurgerMenu;
