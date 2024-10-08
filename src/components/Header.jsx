import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.webp";
import { ReactComponent as Viber } from "../img/viber.svg";
import { ReactComponent as WhatsApp } from "../img/whatsapp.svg";
import { ReactComponent as Phone } from "../img/phone.svg";
import { ReactComponent as MapPin } from "../img/map-pin.svg";

class Header extends React.Component {
  render() {
    return (
      <>
        <header className="header">
          <div className="container">
            <div className="header__wrap">
              <div className="logo__wrap">
                <NavLink to="/">
                  <img src={logo} alt="logo" className="logo" />
                </NavLink>
              </div>
              <nav className="nav_menu">
                <li className="nav_link">
                  <NavLink to="/" className={setActive}>
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
              </nav>
              <div className="contacts__wrap">
                <p className="contacts__head">Контакты:</p>
                <div className="num__wrap">
                  <a
                    href="tel:+375293584596"
                    className="number_link__head"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>
                      <Phone className="phone" />
                      +375 (29) 358-45-96
                    </p>
                  </a>
                </div>
                <div className="social__wrap">
                  <div className="social__item">
                    <a
                      href="viber://chat?number=%2B375293584596"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Viber className="viber" />
                    </a>
                  </div>
                  <div className="social__item">
                    <a
                      href="https://api.whatsapp.com/send?phone=375293584596"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsApp className="whatsApp" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="adress__wrap">
                <a
                  href="https://yandex.by/maps/-/CDwmf63U"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>
                    <MapPin className="mapPin" />
                    Кличев, ул.Пролетарcкая, 104
                  </p>
                </a>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

const setActive = ({ isActive }) => (isActive ? "active-link" : "");

export default Header;
