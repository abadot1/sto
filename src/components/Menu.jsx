import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

class Menu extends React.Component {
  render() {
    return (
      <>
        <header className="header">
          <nav className="nav_menu">
            <ul>
              <li>
                <NavLink to="/home">Главная</NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink to="/about">О нас</NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <section>
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
        </section>
      </>
    );
  }
}

export 