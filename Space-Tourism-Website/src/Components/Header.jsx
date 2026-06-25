import { useState } from "react";
import { Link } from "react-router-dom";
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
            <img src="/assets/shared/logo.svg" alt="Space Tourism" title="Space Tourism" />
          </Link>
        </div>

        <nav className={`navbar ${isNavOpen ? "open":""}`}>
          <button onClick={toggleNav} className="cross-btn">
            <img src="/assets/shared/icon-close.svg" alt="Cross Bar" />
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
            <img src="/assets/shared/icon-hamburger.svg" alt="Menu Bar" />
          </button>
        </div>
      </header>
    </>
  );
}
