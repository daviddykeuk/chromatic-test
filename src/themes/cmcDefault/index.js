import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#00C5E8", light: "#E3FBFF" },
    secondary: { main: "#5d4037" },
    success: {
      main: "#3CCF8E",
    },
    error: {
      main: "#EE4F4F",
    },
  },
  typography: {
    fontFamily: [
      "ModernEra",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontFamily: "ModernEraBold",
      fontSize: 36,
      fontWeight: 800,
      marginTop: 10,
      marginBottom: 10,
    },
    h2: {
      fontFamily: "ModernEraBold",
      fontSize: "24px",
      fontWeight: 800,
    },
    h3: {
      fontFamily: "ModernEraBold",
      fontSize: "16px",
      fontWeight: 500,
      marginTop: 5,
      marginBottom: 15,
    },
    h5: {
      fontFamily: "ModernEraBold",
      fontWeight: 500,
    },
    h6: {
      fontWeight: 200,
      fontSize: "1.15rem",
    },
    body1: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "22px",
    },
  },
  mixins: {
    toolbar: {
      minHeight: 120,
    },
  },
  shape: {
    borderRadius: 7,
  },
});
export default theme;
