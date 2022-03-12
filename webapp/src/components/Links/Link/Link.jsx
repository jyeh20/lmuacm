import React from "react";

import "./Link.css";

const Link = (props) => {
  const { name, link } = props;
  return (
    <div className="Link">
      <div className="Link-text">
        <a href={link} target="_blank" className="Link-name">
          {name}
        </a>
      </div>
    </div>
  );
};

export default Link;
