import React from 'react';

import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Home from './Sections/Home.js';

const theme = createMuiTheme({
  overrides: {
    MuiTimelineItem: {
      missingOppositeContent: {
        "&:before": {
          flex: "0"
        }
      }
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" render={(props) => <Home />} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider >
  );
}

export default App;
