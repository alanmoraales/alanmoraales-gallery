import React from "react";

import styled from "@emotion/styled";
// npm install --save-dev @iconify/react @iconify/icons-ic

import { typeScale, fontWeight, primaryFont, neutral } from "../utils";
import { Icon } from "@iconify/react";

const Div = styled.div`
  color: ${neutral[500]};
  font-family: ${primaryFont};
  font-size: ${typeScale.paragraph};
  font-weight: ${fontWeight.normal};
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
`;

const Text = styled.p`
  margin: 0px;
  margin-top: 5px;
`;

const Link = styled.a`
  text-decoration: none;
`;

const SocialIcon = ({ icon, text, height, to }) => {
  return (
    <Link href={to} target="blank">
      <Div>
        <Icon icon={icon} height={height} />
        <Text>{text}</Text>
      </Div>
    </Link>
  );
};

export default SocialIcon;
