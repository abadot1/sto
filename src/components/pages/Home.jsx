import React from "react";
import { NavLink } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="home__wrap">
          <div className="container">
            <h1 className="title__home">
              Профессиональный <br /> <span>шиномонтаж</span> <br />в Кличеве
            </h1>
            <p className="subtitle__home">
              Качественный сервис и обслуживание
              <br /> в любую погоду
            </p>
            <div className="link__home">
              <NavLink to="/services" className="service_link__home">
                Услуги
              </NavLink>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
