import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  xs: "0px",
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

export const customTheme = extendTheme({
  colors: {
    primary: "#122765 ",
    secundary: "#2563EB ",
    tertiary: "#DBEAFE ",
    quaternary: "#F1F1F1 ",
    error: "red.500",
    text: {
      default: "gray.900",
    },
  },
  fonts: {
    body: "Poppins, system-ui, sans-serif",
    heading: "Poppins , system-ui, sans-serif",
  },
  breakpoints,
  components: {
    Checkbox: {
      baseStyle: {
        control: {
          border: "2px",
          borderColor: "#122765",
          bg: "white",
          borderRadius: "10px",
        },
      },
    },
  },
});
