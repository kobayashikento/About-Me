import React from 'react';

import { Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Home from './Sections/Home.js';
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
      <Switch>
        <Route path="/resume" render={props => <Resume />} />
        <Route path="/" render={props => <Home />} />
      </Switch>
    </ThemeProvider >
  );
}

export default App;
