import React from 'react';

import { Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Home from './Sections/Home.js';

import './history.js';
const theme = createMuiTheme({
  overrides: {
    MuiTimelineItem: {
      missingOppositeContent: {
        "&:before": {
          flex: "0"
        }
      }
    },
    MuiTypography: {
      h2: {
        fontFamily: "'Montserrat', 'Comfortaa' sans-serif"
      },
      h4: {
        fontFamily: "'Montserrat', sans-serif"
      },
      h5: {
        fontFamily: "'Montserrat', sans-serif"
      }
    }
  },
  typography: {
    fontFamily: "'Poppins', sans-serif"
  },
});

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" render={props => <Home />} />
      </Switch>
    </ThemeProvider >
  );
}

export default App;
