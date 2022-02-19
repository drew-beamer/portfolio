import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#3066BE",
            dark: "#003c8d",
            contrastText: "#FFF"
        },
        secondary: {
            main: "#3c3744",
            light: "#66616f",
            dark: "#16111d",
            contrastText: "#FFF"
        }
    },
    typography: {
      fontFamily: "Rustica",
      h1: {
        fontSize: "5rem",
        fontWeight: 700
      },
      button: {
          fontWeight: 500,
          fontSize: 16
      }
    },
  });

  export default theme;