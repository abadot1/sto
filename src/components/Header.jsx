import React from "react";
import Menu from "./Menu";
import { BrowserRouter } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Menu />
        </BrowserRouter>
      </>
    );
  }
}

export default Header;
