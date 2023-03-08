import React from "react";
import { Nav, Wrapper } from "./styled-components";

export const Navbar = () => {
  return (
    <Nav>
      <Wrapper>
        <div className="nav-item">EN</div>
        <div className="nav-item">Center</div>
        <div className="nav-item">Right</div>
      </Wrapper>
    </Nav>
  );
};
