import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    background: {
      default: "#fafafa",
    },
  },
  typography: {
    "fontFamily": [
      "Noto Sans JP", 
      "sans-serif"
    ].join(","),
  }
});

export default theme;
