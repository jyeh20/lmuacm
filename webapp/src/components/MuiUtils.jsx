import { styled } from "@mui/material/styles";
import colors from "../utils/colors";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LightField = styled(TextField)({
  input: {
    color: colors.light,
  },
  "& label": {
    color: colors.light,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: colors.light,
      color: colors.light,
    },
    "&:hover fieldset": {
      borderColor: colors.light,
      color: colors.light,
    },
  },
});

const DarkField = styled(TextField)({
  input: {
    color: colors.dark,
  },
  "& label": {
    color: colors.dark,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: colors.dark,
      color: colors.dark,
    },
    "&:hover fieldset": {
      borderColor: colors.dark,
      color: colors.dark,
    },
  },
});

const SignupButton = styled(Button)({
  backgroundColor: "#003673",
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

export { LightField, DarkField, SignupButton };
