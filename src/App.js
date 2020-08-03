import React from "react";
import { render } from "react-dom";

import { Global } from "@emotion/core";
import { global } from "./utils";

import Index from "./Index";

const App = () => {
  return (
    <div>
      <Global styles={global} />
      <Index />
    </div>
  );
};

render(<App />, document.getElementById("root"));
