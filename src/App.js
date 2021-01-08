import React from 'react';

import { Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Home from './Sections/Home.js';
import Test from './Sections/Test.js';

import './history.js';
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
          color:  "#E83338",
        }
      }
    }
  }
});

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
      <Route path="/test" render={props => <Test />} />
        <Route path="/" render={props => <Home />} />
      </Switch>
    </ThemeProvider >
  );
}

export default App;
