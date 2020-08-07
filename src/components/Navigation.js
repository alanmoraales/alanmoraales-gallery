import React from "react";

import NavItem from "./NavItem";

import { blue } from "../utils";
import styled from "@emotion/styled";

import baselinePhoto from "@iconify/icons-ic/baseline-photo";
import imageGallerySolid from "@iconify/icons-clarity/image-gallery-solid";
import bxsUser from "@iconify/icons-bx/bxs-user";

const Navbar = styled.div`
  background-color: ${blue[400]};
  height: 55px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  position: sticky;
  bottom: 0px;

  @media (min-width: 1280px) {
    display: none;
  }
`;

const Navigation = () => {
  return (
    <Navbar>
      <NavItem icon={baselinePhoto} text="gallery" height={20} to="/" />
      <NavItem
        icon={imageGallerySolid}
        text="collections"
        height={20}
        to="/collections"
      />
      <NavItem icon={bxsUser} text="about" height={20} to="/about" />
    </Navbar>
  );
};

export default Navigation;
