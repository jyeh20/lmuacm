import React, { useState, useEffect } from "react";

import IconButton from "@mui/material/IconButton";

import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";

import "./Header.css";

const Header = (props) => {
  const { changeTheme, openNav, currentPage, color, backgroundColor } = props;

  return (
    <div className="Header">
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
            <IconButton>
              <MenuIcon sx={{ color }} onClick={openNav} />
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
