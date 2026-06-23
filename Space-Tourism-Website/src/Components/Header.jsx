import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../starter-code/assets/shared/logo.svg";
import Menu from "../../starter-code/assets/shared/icon-hamburger.svg";
import Cross from "../../starter-code/assets/shared/icon-close.svg";
import Listitem from "./Listitem";

export default function Header() {
  const handleClick = () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("open");
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Space Tourism" title="Space Tourism" />
          </Link>
        </div>

        <nav className="navbar">
          <button className="cross-btn" onClick={handleClick}>
            <img src={Cross} alt="Cross Bar" />
          </button>
          <ul>
            <Listitem to="/" num={0} route="home" />
            <Listitem
              to="/destination"
              num={1}
              route="destination"
            />
            <Listitem to="/crew" num={2} route="crew" />
            <Listitem
              to="/technology"
              num={3}
              route="technology"
            />
          </ul>
        </nav>
        <div className="hamburger">
          <button onClick={handleClick}>
            <img src={Menu} alt="Menu Bar" />
          </button>
        </div>
      </header>
    </>
  );
}
