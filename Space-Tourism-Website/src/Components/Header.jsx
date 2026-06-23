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

  const handleBar = (evt) => {
    const pathName = window.location.pathname;
    const navLinks = document.querySelectorAll(".bar");
    navLinks.forEach((el) => {
      el.classList.remove("bar");
    });

    let currNav;

    if (pathName == "/") {
      currNav =
        document.querySelector(".navbar>ul").childNodes[0].lastChild;
    } else if (pathName == "/destination") {
      currNav =
        document.querySelector(".navbar>ul").childNodes[1].lastChild;
    } else if (pathName == "/crew") {
      currNav =
        document.querySelector(".navbar>ul").childNodes[2].lastChild;
    } else if (pathName == "/technology") {
      currNav =
        document.querySelector(".navbar>ul").childNodes[3].lastChild;
    }
    currNav.classList.add("bar");
  };

  return (
    <>
      <header className="header">
        <div className="logo" onClick={handleBar}>
          <Link to="/">
            <img src={Logo} alt="Space Tourism" title="Space Tourism" />
          </Link>
        </div>

        <nav className="navbar">
          <button className="cross-btn" onClick={handleClick}>
            <img src={Cross} alt="Cross Bar" />
          </button>
          <ul>
            <Listitem to="/" num={0} route="home" handleBar={handleBar} />
            <Listitem
              to="/destination"
              num={1}
              route="destination"
              handleBar={handleBar}
            />
            <Listitem to="/crew" num={2} route="crew" handleBar={handleBar} />
            <Listitem
              to="/technology"
              num={3}
              route="technology"
              handleBar={handleBar}
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
