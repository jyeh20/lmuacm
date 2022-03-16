import React from "react";

import "./Link.css";

const Link = (props) => {
  const { name, link } = props;
  return (
    <div className="Link">
      <a href={link} target="_blank" className="Link-name">
        <div className="Link-text">{name}</div>{" "}
      </a>
    </div>
  );
};

export default Link;
