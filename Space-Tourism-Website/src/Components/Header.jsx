import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../starter-code/assets/shared/logo.svg";
import Menu from "../../starter-code/assets/shared/icon-hamburger.svg";
import Cross from "../../starter-code/assets/shared/icon-close.svg";
import Listitem from "./Listitem";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = ()=> {
    setIsNavOpen(!isNavOpen)
  }

  const closeNav = () => {
    setIsNavOpen(false)
  }

  return (
    <>
      <header className="header">
        <div className="logo cursor-pointer">
          <Link to="/">
            <img src={Logo} alt="Space Tourism" title="Space Tourism" />
          </Link>
        </div>

        <nav className={`navbar ${isNavOpen ? "open":""}`}>
          <button onClick={toggleNav} className="cross-btn">
            <img src={Cross} alt="Cross Bar" />
          </button>
          <ul>
            <Listitem to="/" num={0} route="home" onClick={closeNav}/>
            <Listitem
              to="/destination"
              num={1}
              route="destination"
              onClick={closeNav}
            />
            <Listitem to="/crew" num={2} route="crew" onClick={closeNav} />
            <Listitem
              to="/technology"
              num={3}
              route="technology"
              onClick={closeNav}
            />
          </ul>
        </nav>
        <div className="hamburger">
          <button onClick={toggleNav}>
            <img src={Menu} alt="Menu Bar" />
          </button>
        </div>
      </header>
    </>
  );
}
