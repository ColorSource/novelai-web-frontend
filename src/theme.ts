// src/theme.ts
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      50: "#e0f7fa",
      100: "#b2ebf2",
      200: "#80deea",
      300: "#4dd0e1",
      400: "#26c6da",
      500: "#00bcd4",
      600: "#00acc1",
      700: "#0097a7",
      800: "#00838f",
      900: "#006064",
    },
    secondary: {
        50: "#f0f0f0",
        100: "#e0e0e0",
        200: "#bdbdbd",
        300: "#9e9e9e",
        400: "#757575",
        500: "#616161",
        600: "#424242",
        700: "#212121",
        800: "#000000",
        900: "#000000"
      },
  },
  styles: {
    global: {
      body: {
        bg: "primary.50",
        color: "secondary.700",
      },
      h1:{
          fontWeight: "bold",
          color: "secondary.900",
      },
      h2:{
        color: "secondary.800",
      },
       h3:{
        color: "secondary.700",
      }
    },
  },
});

export default theme;