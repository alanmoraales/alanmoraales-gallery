import React from "react";
import { render } from "react-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Global } from "@emotion/core";
import { global } from "./utils";

import Index from "./Index";

const App = () => {
  return (
    <Router>
      <Global styles={global} />
      <Switch>
        <Route path="/collections">collections</Route>
        <Route path="/about">about</Route>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </Router>
  );
};

render(<App />, document.getElementById("root"));
