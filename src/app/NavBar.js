import React, { Component } from 'react';
import {
  ThemeProvider,
} from "@mui/material/styles";
import {
  CssBaseline,
  AppBar,
  Box,
  Toolbar,
  Typography,
} from '@mui/material';
import theme from '../theme';

class NavBar extends Component {
  render() {
    return(
      <ThemeProvider
        theme={theme}
        >
        <CssBaseline />
        <div>
          <AppBar
            align="center"
            >
            <Typography
              align="center"
              variant='h3'
              >
              LeCombe Lifestyle
            </Typography>
            <Toolbar
              disableGutters
              variant="h3"
              align="center"
              style={{display:'flex', justifyContent:"center", width:'100%'}}
              >
              <Box
                sx={{ m: 2 }}
                >
                <Typography>
                  Home
                </Typography>
              </Box>
              <Box
                sx={{ m: 2 }}
                >
                <Typography>
                  News
                </Typography>
              </Box>
            </Toolbar>
          </AppBar>
        </div>
      </ThemeProvider>
    )
  }
}

export default NavBar;
