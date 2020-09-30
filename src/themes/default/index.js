import {createMuiTheme} from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary:  { main: '#4CAF50' },
    secondary: { main: '#5d4037' }
  },
  typography: {
    h6: {
      fontWeight: 200,
      fontSize: "1.15rem"
    }
  }
});
export default theme;
