import React, { useState, useEffect } from "react";

import Firebase from "../config/Firebase";

import styled from "@emotion/styled";

import InfiniteGallery from "./components/InfiniteGallery";
import Navigation from "./components/Navigation";
import AppBar from "./components/AppBar";

const Index = () => {
  //const [photos, setPhotos] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [lastDocument, setLastDocument] = useState();

  const [loading, setLoading] = useState(true);

  const firestore = Firebase.firestore();
  const query = firestore.collection("images").orderBy("date", "desc");
  const limit = 10;

  const extractThumbnails = (snapshots) => {
    const newThumbnails = snapshots.docs.map((doc) => {
      let data = doc.data();
      return {
        id: doc.id,
        src: data.thumbnail,
        width: data.thumbWidth,
        height: data.thumbHeight,
      };
    });
    setThumbnails(thumbnails.concat(newThumbnails));
  };

  /*
  const extractPhotos = (snapshots) => {
    const newPhotos = snapshots.docs.map((doc) => {
      let data = doc.data();
      return {
        src: data.src,
      };
    });
    setPhotos(photos.concat(newPhotos));
  };
  */

  const next = () => {
    query
      .startAfter(lastDocument)
      .limit(limit)
      .get()
      .then((snapshots) => {
        if (snapshots.docs.length > 0) {
          extractThumbnails(snapshots);
          //extractPhotos(snapshots);
          setLastDocument(snapshots.docs[snapshots.docs.length - 1]);
        } else {
          setHasMore(false);
        }
      });
  };

  useEffect(() => {
    query
      .limit(limit)
      .get()
      .then((snapshots) => {
        extractThumbnails(snapshots);
        //extractPhotos(snapshots);
        setLastDocument(snapshots.docs[snapshots.docs.length - 1]);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <p>loading...</p>
  ) : (
    <div>
      <AppBar />
      <InfiniteGallery thumbnails={thumbnails} next={next} hasMore={hasMore} />
      <Navigation />
    </div>
  );
};

export default Index;
