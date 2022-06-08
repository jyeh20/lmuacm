import { createContext } from "react";
import colors from "../utils/colors.js";

const themes = {
  light: {
    color: colors.dark,
    backgroundColor: colors.light,
  },
  dark: {
    color: colors.light,
    backgroundColor: colors.dark,
  },
};

const ThemeContext = createContext();

export { themes, ThemeContext };
