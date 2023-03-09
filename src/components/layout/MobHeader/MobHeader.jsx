import React, { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import "./MobHeader.scss";

const MobHeader = () => {
  const [showBurger, setShowBurger] = useState(false);

  return (
    <div className="mobHeader">
      <BurgerMenu showBurger={showBurger} />

      <div className="mobHeader-content">
        <a className="mobHeader-logo" href="/">
          <img src="./img/header/header-logo.png" alt="" />
        </a>

        <a className="mobHeader-link" href="/catalog">
          Каталог
        </a>

        <a className="mobHeader-phone" href="tel:+380968508500">
          <img src="./img/header/mobPhone.png" alt="" />
        </a>

        <button
          onClick={() => setShowBurger(!showBurger)}
          className={`burger ${showBurger ? "showBurger" : ""}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default MobHeader;
