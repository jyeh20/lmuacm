import React from "react";

import "./Contact.css";

import SOCIALS from "../../../assets/socials.json";

import IconButton from "@mui/material/IconButton";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = (props) => {
  const { color } = props;
  const socials = SOCIALS.socials;
  console.log(socials);

  let social_arr = [];
  console.log(Object.entries(socials));
  for (let [item, value] in Object.entries(socials)) {
    console.log(item, value);
  }

  return (
    <div className="Contact">
      <div style={{ gridRowStart: 2 }} className="Contact-row">
        <IconButton className="Contact-button">
          <InstagramIcon sx={{ color: color }} />
        </IconButton>
      </div>
    </div>
  );
};

export default Contact;
