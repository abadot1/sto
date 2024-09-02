import React from "react";
// import hero from "../../img/hero-img.webp";
import { NavLink } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="home__wrap">
          {/* <img src={hero} alt="hero" className="bckg__home" /> */}
          <div className="container">
            <h1>
              Профессиональный <span>шиномонтаж</span> в Кличеве
            </h1>
            <p>Качественный сервис и обслуживание в любую погоду</p>
            <NavLink to="/services">Услуги</NavLink>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
