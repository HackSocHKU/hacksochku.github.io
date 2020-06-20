import { theme } from "@chakra-ui/core";

const { colors } = theme;

export default {
  ...theme,
  colors: {
    ...colors,
    primary: "#fff",
    secondary: "#F7FAFC",
    text: "#000",
  },
  breakpoints: ["30em", "48em", "62em", "80em"],
};
