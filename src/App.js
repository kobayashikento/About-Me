import React from 'react';

import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Home from './Sections/Home.js';
import AboutMe from './Sections/AboutMe.js';
import Resume from './Sections/Resume.js';

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
          <Route path="/resume" render={(props) => <Resume />} />
          <Route path="/home" render={(props) => <Home />} />
          <Redirect from="/" to="/home" />
        </Switch>
      </BrowserRouter>
    </ThemeProvider >
  );
}

export default App;
