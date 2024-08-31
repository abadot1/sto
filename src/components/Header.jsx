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
                <div className="num__wrap">
                  <p>Контакты:</p>
                  <a href="tel:+375293584596">
                    <p>
                      <Phone className="phone" />
                      +375293584596
                    </p>
                  </a>
                </div>
                <div className="social__wrap">
                  <div className="social__item">
                    <a href="viber://chat?number=%2B375293584596">
                      <Viber className="viber" />
                    </a>
                  </div>
                  <div className="social__item">
                    <a href="https://api.whatsapp.com/send?phone=375293584596">
                      <WhatsApp className="whatsApp" />
                    </a>
                  </div>
                </div>
                <div className="adress__wrap">
                  <a href="https://yandex.by/maps/-/CDwmf63U">
                    <p>
                      <MapPin className="mapPin" />
                      Кличев, ул.Пролетармкая, 104
                    </p>
                  </a>
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
