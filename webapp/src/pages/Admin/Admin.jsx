import React, { useContext } from "react";

import { ThemeContext } from "../../context/themeContext";

import LogIn from "../../components/Admin/LogIn";

import "./Admin.css";

const Admin = (props) => {
  const theme = useContext(ThemeContext);
  const backgroundColor = theme.backgroundColor;
  return (
    <div className="Admin" style={{ backgroundColor }}>
      <LogIn />
    </div>
  );
};

export default Admin;
