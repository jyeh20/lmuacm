import React from "react";

import "./Contact.css";

import links from "../../../assets/links.json";

import IconButton from "@mui/material/IconButton";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = (props) => {
  const { color } = props;
  const socials = links.socials;

  const getIcon = (name) => {
    switch (name) {
      case "Instagram":
        return <InstagramIcon sx={{ color: color }} />;
      case "Facebook":
        return <FacebookIcon sx={{ color: color }} />;
      default:
        return <LinkedInIcon sx={{ color: color }} />;
    }
  };

  return (
    <div className="Contact">
      {socials.map(([name, link], index) => (
        <a
          href={link}
          target="_blank"
          style={{ gridRowStart: index * 2 + 1, color: color }}
          // className="Contact-row"
        >
          <div
            // href={link}
            // target="_blank"
            // style={{ gridRowStart: index * 2 + 1, color: color }}
            className="Contact-row"
          >
            <IconButton className="Contact-button">{getIcon(name)}</IconButton>
            <div className="Contact-link">{name}</div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Contact;
