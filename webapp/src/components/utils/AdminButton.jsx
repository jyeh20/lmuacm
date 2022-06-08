import React from "react";

import colors from "../../utils/colors";
import { styled } from "@mui/material/styles";

import Button from "@mui/material/IconButton";

const StyledAddButton = styled(Button)({
  backgroundColor: "#003673",
  width: "max(60px, 80%)",
  height: "max(40px, 70%)",
  borderRadius: "15px",
  fontSize: "0.8em",
  color: colors.light,
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const AdminButton = (props) => {
  const { children, handler } = props;
  return <StyledAddButton onClick={handler}>{children}</StyledAddButton>;
};

export default AdminButton;
