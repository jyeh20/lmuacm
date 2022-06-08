import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import { LightField, DarkField, SignupButton } from "../MuiUtils";

const SignUp = (props) => {
  const theme = useContext(ThemeContext);
  const color = theme.color;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [darkmode, setDarkmode] = useState(color === "#DBDBDB");
  const navigate = useNavigate();

  useEffect(() => {
    if (color === "#DBDBDB") {
      setDarkmode(true);
    } else {
      setDarkmode(false);
    }
  }, [color]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      if (userCred) {
        navigate("/admin/view");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box
      onSubmit={handleSubmit}
      className="SignUp"
      component="form"
      autoComplete="off"
    >
      <div className="SignUp-title" style={{ color }}>
        Admin Log In
      </div>
      <div className="SignUp-input">
        {darkmode ? (
          <LightField
            onChange={handleEmail}
            label="Email"
            required
            type="email"
            size="small"
            fullWidth
            value={email}
          />
        ) : (
          <DarkField
            onChange={handleEmail}
            label="Email"
            required
            type="email"
            size="small"
            fullWidth
            value={email}
          />
        )}
      </div>
      <div className="SignUp-input">
        {darkmode ? (
          <LightField
            onChange={handlePassword}
            label="Password"
            required
            type="password"
            size="small"
            fullWidth
            value={password}
          />
        ) : (
          <DarkField
            onChange={handlePassword}
            label="Password"
            required
            type="password"
            size="small"
            fullWidth
            value={password}
          />
        )}
      </div>
      <div className="SignUp-button">
        <SignupButton variant="filled" type="submit">
          Submit
        </SignupButton>
      </div>
    </Box>
  );
};

export default SignUp;
