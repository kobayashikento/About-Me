import React from 'react';

import { Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Home from './Sections/Home.js';
import Resume from './Sections/Resume.js';
import AboutMe from './Sections/AboutMe.js';

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
  },
  typography: {
    fontFamily: [
      'sans serif'
    ],
  },
});

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/resume/all" render={props => <Resume index={0} />} />
        <Route path="/resume/education" render={props => <Resume index={1} />} />
        <Route path="/resume/experience" render={props => <Resume index={2} />} />
        <Route path="/resume/skills" render={props => <Resume index={3} />} />
        <Route path="/resume/activities" render={props => <Resume index={4} />} />
        <Route path="/resume" render={props => <Resume index={0} />} />
        <Route path="/about-me" render={props => <AboutMe />} />
        <Route path="/" render={props => <Home />} />
      </Switch>
    </ThemeProvider >
  );
}

export default App;
