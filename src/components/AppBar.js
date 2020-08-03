import React from "react";
import styled from "@emotion/styled";

import { neutral } from "../utils";

import Logo from "./logo-azul-1.svg";
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
`;

const Wrapper = styled.div`
  position: sticky;
  top: 0px;
  background-color: ${neutral[100]};
`;

const AppBar = () => {
  return (
    <Wrapper>
      <Bar>
        <Logo />
        <Icon icon={menuAlt} height={23} />
      </Bar>
    </Wrapper>
  );
};

export default AppBar;
