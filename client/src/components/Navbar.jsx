import React from "react";
import { Nav, SpacedWrapper, Language } from "./styled-components";

export const Navbar = () => {
  return (
    <div className="nav">
      <SpacedWrapper>
        <div className="nav-item">
          <span className="lang">EN</span>
        </div>
        <div className="nav-item">Center</div>
        <div className="nav-item">Right</div>
      </SpacedWrapper>
    </div>
  );
};
