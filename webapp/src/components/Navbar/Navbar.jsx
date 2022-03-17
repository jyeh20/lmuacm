import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./Navbar.css";
import assets from "../../assets/assetList.json";

const Navbar = (props) => {
  const { color, bgColor, handleNavbar, isOpen } = props;
  const [displayNav, setDisplayNav] = useState(true);
  const navs = assets.nav;

  const borderColor = bgColor === "#141414" ? "#C4C4C4" : "#585858";
  const backgroundColor = bgColor === "#141414" ? "#363636" : "#C7C7C7";

  const initiateNavClose = () => {
    setDisplayNav(false);
  };

  const handleCloseNav = () => {
    handleNavbar();
    setDisplayNav(true);
  };

  const navButtons = navs.map(([name, link]) => (
    <Link
      to={link}
      className="Navbar-link"
      style={{ color }}
      onClick={initiateNavClose}
      key={`Navbar-${name}`}
    >
      <div className="Navbar-button" style={{ borderColor }}>
        {name}
      </div>
    </Link>
  ));

  return (
    <div
      className="Navbar-modal"
      onClick={initiateNavClose}
      style={{ display: isOpen ? "inherit" : "none" }}
    >
      {displayNav ? (
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
          onAnimationEnd={handleCloseNav}
        >
          <div className="Navbar-links-start" style={{ borderColor }} />
          {navButtons}
        </div>
      )}
    </div>
  );
};

export default Navbar;
