import React, { useState } from "react";
import { Link } from "react-router-dom";

import styled from "@emotion/styled";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { Icon } from "@iconify/react";
import baselinePhoto from "@iconify/icons-ic/baseline-photo";
import imageGallerySolid from "@iconify/icons-clarity/image-gallery-solid";
import bxsUser from "@iconify/icons-bx/bxs-user";

import { neutral, primaryFont } from "../utils";

const useStyles = makeStyles({
  listItem: {
    paddingLeft: "40px",
    paddingRight: "40px",
  },
  icon: {
    fontSize: "20px",
  },
  listText: {
    fontFamily: primaryFont,
  },
  listIcon: {
    minWidth: "0px",
    paddingRight: "15px",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
});

const Wrapper = styled.div`
  background-color: ${neutral[100]};
  display: grid;
  grid-template-rows: 70% 30%;
  height: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  width: 70vw;
  max-width: 300px;
`;

const AItem = ({ href, text }) => {
  const classes = useStyles();
  return (
    <a href={href} target="blank" className={classes.link}>
      <ListItem button key={text} className={classes.listItem}>
        <ListItemText>{text}</ListItemText>
      </ListItem>
    </a>
  );
};

const LinkItem = ({ text, to, icon }) => {
  const classes = useStyles();
  return (
    <Link to={to} className={classes.link}>
      <ListItem button key={text} className={classes.listItem}>
        <ListItemIcon className={classes.listIcon}>
          <Icon icon={icon} className={classes.icon} />
        </ListItemIcon>
        <ListItemText>{text}</ListItemText>
      </ListItem>
    </Link>
  );
};

const Sidebar = ({ open, onClose }) => {
  return (
    <Drawer open={open} onClose={onClose} variant="temporary" anchor="right">
      <Wrapper>
        <List>
          <LinkItem text="gallery" to="/" icon={baselinePhoto} />
          <LinkItem
            text="collections"
            to="/collections"
            icon={imageGallerySolid}
          />
          <LinkItem text="about" to="/about" icon={bxsUser} />
        </List>
        <List>
          <Divider />
          <AItem
            href="https://www.instagram.com/alanmoraales/"
            text="instagram"
          />
          <AItem href="https://twitter.com/alanmoraaless" text="twitter" />
          <AItem href="https://github.com/alanmoraales" text="github" />
        </List>
      </Wrapper>
    </Drawer>
  );
};

export default Sidebar;
