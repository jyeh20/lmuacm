import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";

import Navbar from "../Navbar/Navbar";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";

import "./Header.css";

const Header = (props) => {
  const { changeTheme, currentPage, color, backgroundColor } = props;
  const [navOpen, setNavOpen] = useState(false);

  const handleNavbar = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="Header">
      <Navbar
        color={color}
        back={backgroundColor}
        handleNavbar={handleNavbar}
        isOpen={navOpen}
      />
      <div className="Header-mobile">
        <div className="Header-dark-toggle" style={{ backgroundColor }}>
          <IconButton onClick={changeTheme}>
            <LightModeIcon sx={{ color }} />
          </IconButton>
        </div>
        <div className="Header-title">LMU ACM</div>
        <div className="Header-subtitle">{currentPage}</div>
      </div>
      <div className="Header-large-screen">
        <div className="Header-menu">
          <div className="Header-button" style={{ backgroundColor }}>
            <IconButton onClick={handleNavbar}>
              <MenuIcon sx={{ color }} />
            </IconButton>
          </div>
        </div>
        <div className="Header-text">
          <div className="Header-title">LMU ACM</div>
          <div className="Header-subtitle">{currentPage}</div>
        </div>
        <div className="Header-dark-toggle">
          <div className="Header-button" style={{ backgroundColor }}>
            <IconButton onClick={changeTheme}>
              <LightModeIcon sx={{ color }} />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
