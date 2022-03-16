import React, { useState } from "react";

import "./Navbar.css";
import assets from "../../assets/assetList.json";

const Navbar = (props) => {
  const { color, bgColor, closeNav, isOpen } = props;
  const [navIn, setNavIn] = useState(isOpen);
  const navs = assets.nav;

  const borderColor = bgColor === "#141414" ? "#C4C4C4" : "#585858";
  const backgroundColor = bgColor === "#141414" ? "#363636" : "#C7C7C7";

  const initiateNavClose = () => {
    setNavIn(false);
  };

  const navButtons = navs.map(([name, link]) => (
    <a href={link} className="Navbar-link" style={{ color }}>
      <div className="Navbar-button" style={{ borderColor }}>
        {name}
      </div>
    </a>
  ));
  return (
    <div
      className="Navbar-modal"
      onClick={initiateNavClose}
      style={{ display: isOpen ? "inherit" : "none" }}
    >
      {navIn ? (
        <div
          className="Navbar-in"
          style={{ backgroundColor }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="Navbar-links-start" style={{ borderColor }} />
          {navButtons}
        </div>
      ) : (
        <div
          className="Navbar-out"
          style={{ backgroundColor }}
          onAnimationEnd={closeNav}
        >
          <div className="Navbar-links-start" style={{ borderColor }} />
          {navButtons}
        </div>
      )}
    </div>
  );
};

export default Navbar;
