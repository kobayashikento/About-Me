import React from 'react';

import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Landing from './Sections/Landing';

import history from './history.js';

const theme = createMuiTheme({
  overrides: {
    MuiIconButton: {
      root: {
        backgroundColor: 'transparent',
        "&:hover": {
          backgroundColor: 'transparent',
        }
      },
    },
    MuiSvgIcon: {
      root: {
        color: "rgb(86, 33, 48)",
        "&:hover": {
          color: "#E83338",
        }
      }
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" render={() => <Landing />} />
        </Switch>
      </Router>
    </ThemeProvider >
  );
}

export default App;
