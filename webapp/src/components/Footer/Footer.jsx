import React from "react";

import "./Footer.css";
import assetList from "../../assets/assetList.json";

import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LinkIcon from "@mui/icons-material/Link";

const Footer = (props) => {
  const { color, setPage } = props;
  const navButtons = assetList.nav;

  const getButton = (name) => {
    switch (name) {
      case "Home":
        return <HomeIcon sx={{ color: "#DBDBDB" }} />;
      case "Events":
        return <CalendarTodayIcon sx={{ color: "#DBDBDB" }} />;
      default:
        return <LinkIcon sx={{ color: "#DBDBDB" }} />;
    }
  };

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <div className="Footer">
      <div className="Footer-mobile">
        {navButtons.map(([name, link], index) => (
          <div
            className="Footer-section"
            style={{
              gridColumnStart: index * 2 + 2,
            }}
            key={`Footer-${name}`}
          >
            <Link
              className="Footer-button-container"
              style={{
                color: "#DBDBDB",
                textDecoration: "None",
              }}
              to={link}
              onClick={() => {
                handlePageChange(name);
              }}
            >
              <IconButton className="Footer-button">
                {getButton(name)}
              </IconButton>
              <div className="Footer-link">{name}</div>
            </Link>
          </div>
        ))}
      </div>
      <div className="Footer-desktop">hi</div>
    </div>
  );
};

export default Footer;
