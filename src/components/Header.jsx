import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.webp";

class Header extends React.Component {
  render() {
    return (
      <>
        <header className="header">
          <div className="container">
            <div className="header__wrap">
              <div className="logo__wrap">
                <NavLink to="/home">
                  <img src={logo} alt="logo" className="logo" />
                </NavLink>
              </div>
              <div className="navigation__wrap">
                <nav className="nav_menu">
                  <ul>
                    <li className="nav_link">
                      <NavLink to="/home" className={setActive}>
                        Главная
                      </NavLink>
                    </li>
                    <li className="nav_link">
                      <NavLink to="/services" className={setActive}>
                        Услуги
                      </NavLink>
                    </li>
                    <li className="nav_link">
                      <NavLink to="/price" className={setActive}>
                        Прейскурант
                      </NavLink>
                    </li>
                    <li className="nav_link">
                      <NavLink to="/about" className={setActive}>
                        О нас
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="contacts__wrap">
                <div className="social__wrap">
                  <div className="social__viber"></div>
                  <div className="social__whatsApp"></div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

const setActive = ({ isActive }) => (isActive ? "nav__but" : "");

export default Header;
