import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      //   mobile: 0,
      //   tablet: 768,
      //   laptop: 1024,
      //   desktop: 1280,
    },
  },

  palette: {
    primary: {
      main: "#b4b2e7",
    },
  },

  typography: {
    fontFamily: "Avenir",
    fontSize: "24",
  },
});
