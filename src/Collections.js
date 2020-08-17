import React from "react";

import styled from "@emotion/styled";

import AppBar from "./components/AppBar";
import Navigation from "./components/Navigation";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 63px - 55px);

  @media (min-width: 1280px) {
    min-height: calc(100vh - 63px);
  }
`;
const Collections = () => {
  return (
    <div>
      <AppBar />
      <Wrapper>Nothing here for now...</Wrapper>
      <Navigation />
    </div>
  );
};

export default Collections;
