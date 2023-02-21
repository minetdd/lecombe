// import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#757575',
    },
    secondary: {
      main: '#f50057',
    },
  },
  spacing: 8,
});

export default theme;