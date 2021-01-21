import React from 'react';

import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Home from './Sections/Home.js';
import Showcase from './Sections/Showcase.js';

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
          <Route path="/portfolio/about" render={() =>
            <Home history={history} initial={false} landing={false} first={true} second={true} view={"about"} />}
          />
          <Route path="/portfolio/experience" render={() =>
            <Home history={history} initial={false} landing={false} first={true} second={true} view={"experience"} />}
          />
          <Route path="/portfolio/projects" render={() =>
            <Home history={history} initial={false} landing={false} first={true} second={true} view={"projects"} />}
          />
          <Route path="/portfolio/contact" render={() =>
            <Home history={history} initial={false} landing={false} first={true} second={true} view={"contact"} />}
          />
           <Route path="/portfolio/showcase" render={() =>
            <Showcase />}
          />
          <Route path="/" render={() =>
            <Home history={history} initial={true} landing={true} first={false} second={false} />}
          />
        </Switch>
      </Router>
    </ThemeProvider >
  );
}

export default App;
