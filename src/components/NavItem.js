import React from "react";
import { Link } from "react-router-dom";

import styled from "@emotion/styled";
// npm install --save-dev @iconify/react @iconify/icons-ic

import { typeScale, fontWeight, primaryFont, neutral } from "../utils";
import { Icon } from "@iconify/react";

const Div = styled.div`
  color: ${neutral[100]};
  font-family: ${primaryFont};
  font-size: ${typeScale.helperText};
  font-weight: ${fontWeight.medium};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
  margin: 0px;
  margin-top: 5px;
`;

const NavItem = ({ icon, text, height, to }) => {
  return (
    <Link to={to}>
      <Div>
        <Icon icon={icon} height={height} />
        <Text>{text}</Text>
      </Div>
    </Link>
  );
};

export default NavItem;
