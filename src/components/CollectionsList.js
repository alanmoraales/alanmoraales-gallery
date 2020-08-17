import React, { useState, useEffect } from "react";

import styled from "@emotion/styled";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Firebase from "../../config/Firebase";

const useStyles = makeStyles({
  root: {
    minWidth: 100,
    maxWidth: "400px",
    margin: "15px",
  },
  media: {
    height: 250,
  },
  description: {
    maxHeight: 100,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

const MediaCard = ({ title, image, description }) => {
  const firestore = Firebase.firestore();
  const query = firestore.collection("images").doc(image);
  const classes = useStyles();

  const [coverURL, setCoverURL] = useState("");

  useEffect(() => {
    query.get().then((doc) => {
      setCoverURL(doc.data().thumbnail);
    });
  });

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={coverURL}
          title="collection cover"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography
            className={classes.description}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          see more
        </Button>
      </CardActions>
    </Card>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const CardList = styled.div`
  margin: 0 auto;
  max-width: 95%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const CollectionsList = ({ collections }) => {
  const classes = useStyles();

  return (
    <Wrapper>
      <CardList>
        {collections.map((collection) => (
          <MediaCard
            key={collection.data().id}
            title={collection.data().name}
            image={collection.data().images[0]}
            description={collection.data().description}
          />
        ))}
      </CardList>
    </Wrapper>
  );
};

export default CollectionsList;
