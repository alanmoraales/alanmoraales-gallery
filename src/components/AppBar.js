import React from "react";
import styled from "@emotion/styled";

import { neutral } from "../utils";

import { Logos } from "../assets";
import { Icon, InlineIcon } from "@iconify/react";
import menuAlt from "@iconify/icons-dashicons/menu-alt";

import { Link } from "react-router-dom";

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

  .link {
    text-decoration: none;
    color: black;
  }
`;

const AppBar = () => {
  return (
    <Wrapper>
      <Bar>
        <Logos.LogoAzul />
        <Icon className="icon" icon={menuAlt} height={23} />

        <Links>
          <Link to="/" className="link">
            gallery
          </Link>
          <Link to="/collections" className="link">
            collections
          </Link>
          <Link to="/about" className="link">
            about
          </Link>
          <a
            href="https://www.instagram.com/alanmoraales/"
            target="blank"
            className="link"
          >
            instagram
          </a>
          <a
            href="https://twitter.com/alanmoraaless"
            target="blank"
            className="link"
          >
            twitter
          </a>
          <a
            href="https://github.com/alanmoraales"
            target="blank"
            className="link"
          >
            github
          </a>
        </Links>
      </Bar>
    </Wrapper>
  );
};

export default AppBar;
