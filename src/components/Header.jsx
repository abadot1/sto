import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.webp";

class Header extends React.Component {
  render() {
    return (
      <>
        <header className="header">
          <div className="container">
            <div className="logo-wrap">
              <NavLink to="/home">
                <img src={logo} alt="logo" className="logo" />
              </NavLink>
            </div>
            <nav className="nav_menu">
              <ul>
                <li className="nav_link">
                  <NavLink to="/home" className={setActive}>
                    Главная
                  </NavLink>
                </li>
              </ul>
              <ul>
                <li className="nav_link">
                  <NavLink to="/services" className={setActive}>
                    Услуги
                  </NavLink>
                </li>
              </ul>
              <ul>
                <li className="nav_link">
                  <NavLink to="/about" className={setActive}>
                    О нас
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </>
    );
  }
}

const setActive = ({ isActive }) => (isActive ? "nav__but" : "");

export default Header;
