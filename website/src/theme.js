import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900, // changed from default 900
      lg: 1367,
      xl: 1736,
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontWeightLight: 100,
  },
});

export default theme;
