import { theme } from "@chakra-ui/core";

const { colors } = theme;

export default {
  ...theme,
  colors: {
    ...colors,
    primary: "#fff",
    secondary: "#000",
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
  breakpoints: ["30em", "48em", "62em", "80em"],
};
