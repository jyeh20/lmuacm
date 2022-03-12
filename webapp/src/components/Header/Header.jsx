import React, { useState, useEffect } from "react";

import IconButton from "@mui/material/IconButton";

import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";

import "./Header.css";

const Header = (props) => {
  const { changeTheme, currentPage, color, bgColor } = props;

  return (
    <div className="Header">
      <div className="Header-mobile">
        <div
          className="Header-dark-toggle"
          style={{ backgroundColor: bgColor }}
        >
          <IconButton onClick={changeTheme}>
            <LightModeIcon sx={{ color: color }} />
          </IconButton>
        </div>
        <div className="Header-title">LMU ACM</div>
        <div className="Header-subtitle">{currentPage}</div>
      </div>
      <div className="Header-large-screen">Hello Large</div>
    </div>
  );
};

export default Header;
