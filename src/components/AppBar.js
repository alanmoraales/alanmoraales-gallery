import React from "react";
import styled from "@emotion/styled";

import { neutral } from "../utils";

import { Logos } from "../assets";
import { Icon, InlineIcon } from "@iconify/react";
import menuAlt from "@iconify/icons-dashicons/menu-alt";

const Bar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 90%;
  height: 63px;
  margin: 0 auto;

  @media (min-width: 1280px) {
    .icon {
      display: none;
    }
  }
`;

const Wrapper = styled.div`
  position: sticky;
  top: 0px;
  background-color: ${neutral[100]};
`;

const Links = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    width: 500px;
  }
`;

const AppBar = () => {
  return (
    <Wrapper>
      <Bar>
        <Logos.LogoAzul />
        <Icon className="icon" icon={menuAlt} height={23} />

        <Links>
          <a className="link">gallery</a>
          <a className="link">collections</a>
          <a className="link">about</a>
          <a className="link">instagram</a>
          <a className="link">twitter</a>
          <a className="link">github</a>
        </Links>
      </Bar>
    </Wrapper>
  );
};

export default AppBar;
