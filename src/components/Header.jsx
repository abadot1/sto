import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <>
        <header className="header">
          <div className="logo"></div>
          <nav className="nav_menu">
            <ul>
              <li>
                <NavLink to="/home" className={setActive}>
                  Главная
                </NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink to="/about" className={setActive}>
                  О нас
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </>
    );
  }
}

const setActive = ({ isActive }) => (isActive ? "nav__but-active" : "nav__but");

export default Header;
