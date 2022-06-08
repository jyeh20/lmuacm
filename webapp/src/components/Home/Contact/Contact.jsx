import React, { useContext } from "react";

import { ThemeContext } from "../../../context/themeContext";
import "./Contact.css";

import assetList from "../../../assets/assetList.json";

import IconButton from "@mui/material/IconButton";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = (props) => {
  const theme = useContext(ThemeContext);
  const color = theme.color;
  const socials = assetList.socials;

  const getIcon = (name) => {
    switch (name) {
      case "Instagram":
        return <InstagramIcon sx={{ color, fontSize: "1.4em" }} />;
      case "Facebook":
        return <FacebookIcon sx={{ color, fontSize: "1.4em" }} />;
      default:
        return <LinkedInIcon sx={{ color, fontSize: "1.4em" }} />;
    }
  };

  return (
    <div className="Contact">
      {socials.map(([name, link], index) => (
        <a
          href={link}
          target="_blank"
          style={{ gridRowStart: index * 2 + 1, color }}
          key={`Contact-${name}`}
        >
          <div className="Contact-row">
            <IconButton className="Contact-button">{getIcon(name)}</IconButton>
            <div className="Contact-link">{name}</div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Contact;
