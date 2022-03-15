import React from "react";

import "./Links.css";

import Link from "../../components/Links/Link/Link";

const Links = (props) => {
  const { color, backgroundColor, linkDoc } = props;

  return (
    <div className="Links" style={{ backgroundColor }}>
      <div className="Links-container">
        {Object.entries(linkDoc).map(([name, link]) => (
          <Link name={name} link={link} />
        ))}
      </div>
    </div>
  );
};

export default Links;
