import React from "react";

import "./Links.css";

import Link from "../../components/Links/Link/Link";

const Links = (props) => {
  const { backgroundColor, linkDoc } = props;

  const getLinks = (doc) => {
    if (doc) {
      return Object.values(doc).map((item) => (
        <Link name={Object.keys(item)[0]} link={Object.values(item)[0]} />
      ));
    }
  };

  return (
    <div className="Links" style={{ backgroundColor }}>
      <div className="Links-container">{getLinks(linkDoc)}</div>
    </div>
  );
};

export default Links;
