import React from "react";
import { render } from "react-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Global } from "@emotion/core";
import { global } from "./utils";

import Index from "./Index";
import About from "./About";
import Collections from "./Collections";

const App = () => {
  return (
    <Router>
      <Global styles={global} />
      <Switch>
        <Route exact path="/collections">
          <Collections />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Index />
        </Route>
      </Switch>
    </Router>
  );
};

render(<App />, document.getElementById("root"));
