import React from "react";

import "./Links.css";

import Link from "../../components/Links/Link/Link";

const Links = (props) => {
  const { color, bgColor, linkDoc } = props;

  return (
    <div className="Links" style={{ backgroundColor: bgColor }}>
      {Object.entries(linkDoc).map(([name, link]) => (
        <Link name={name} link={link} />
      ))}
    </div>
  );
};

export default Links;
