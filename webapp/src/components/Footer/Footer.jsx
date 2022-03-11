import React from "react";

import "./Footer.css";
import assetList from "../../assets/assetList.json";

import IconButton from "@mui/material/IconButton";

import HomeIcon from "@mui/icons-material/Home";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LinkIcon from "@mui/icons-material/Link";

const Footer = (props) => {
  const { color } = props;
  const navButtons = assetList.nav;

  const getButton = (name) => {
    switch (name) {
      case "Home":
        return <HomeIcon sx={{ color: color, fontSize: "1.3em" }} />;
      case "Events":
        return <CalendarTodayIcon sx={{ color: color }} />;
      default:
        return <LinkIcon sx={{ color: color }} />;
    }
  };

  return (
    <div className="Footer">
      {navButtons.map(([name, link], index) => (
        <div
          className="Footer-section"
          style={{
            gridColumnStart: index * 2 + 2,
          }}
        >
          <a
            className="Footer-button-container"
            href={link}
            style={{
              color: color,
              textDecoration: "None",
            }}
          >
            <IconButton className="Footer-button">{getButton(name)}</IconButton>
            <div className="Footer-link">{name}</div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Footer;
