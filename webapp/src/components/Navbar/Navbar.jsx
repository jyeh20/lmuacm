import React, { useState, useContext } from "react";

import colors from "../../utils/colors";
import { ThemeContext } from "../../context/themeContext";

import { Link } from "react-router-dom";

import "./Navbar.css";
import assets from "../../assets/assetList.json";

const Navbar = (props) => {
  const { handleNavbar, isOpen } = props;
  const theme = useContext(ThemeContext);
  const themeColor = theme.color;
  const bgColor = theme.color;
  const [displayNav, setDisplayNav] = useState(true);
  const navs = assets.nav;

  const color = themeColor === colors.light ? colors.dark : colors.light;
  const borderColor = bgColor === colors.dark ? "#C4C4C4" : colors.gray;
  const backgroundColor = bgColor === colors.dark ? "#363636" : "#C7C7C7";

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
