import React from "react";
// import hero from "../../img/hero-img.webp";
import { NavLink } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="home__wrap">
          <div className="container">
            <h1 className="title_header">
              Профессиональный <br /> <span>шиномонтаж</span> <br />в Кличеве
            </h1>
            <p className="subtitle_header">
              Качественный сервис и обслуживание
              <br /> в любую погоду
            </p>
            <NavLink to="/services">Услуги</NavLink>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
