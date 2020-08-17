import React from "react";

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
});

const Wrapper = styled.div`
  background-color: ${neutral[100]};
  display: grid;
  grid-template-rows: 70% 30%;
  height: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
`;

const Sidebar = ({ open, onClose }) => {
  const classes = useStyles();

  return (
    <Drawer open={open} onClose={onClose} variant="temporary" anchor="right">
      <Wrapper>
        <List>
          <ListItem button key="gallery" className={classes.listItem}>
            <ListItemIcon className={classes.listIcon}>
              <Icon icon={baselinePhoto} className={classes.icon} />
            </ListItemIcon>
            <ListItemText>gallery</ListItemText>
          </ListItem>
          <ListItem button key="collections" className={classes.listItem}>
            <ListItemIcon className={classes.listIcon}>
              <Icon icon={imageGallerySolid} className={classes.icon} />
            </ListItemIcon>
            <ListItemText>collections</ListItemText>
          </ListItem>
          <ListItem button key="about" className={classes.listItem}>
            <ListItemIcon className={classes.listIcon}>
              <Icon icon={bxsUser} className={classes.icon} />
            </ListItemIcon>
            <ListItemText>about</ListItemText>
          </ListItem>
        </List>
        <List>
          <Divider />
          <ListItem button key="instagram" className={classes.listItem}>
            <ListItemText>instagram</ListItemText>
          </ListItem>
          <ListItem button key="github" className={classes.listItem}>
            <ListItemText>github</ListItemText>
          </ListItem>
        </List>
      </Wrapper>
    </Drawer>
  );
};

export default Sidebar;
