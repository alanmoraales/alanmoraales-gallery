import React, { useState, useEffect } from "react";

import styled from "@emotion/styled";

import AppBar from "./components/AppBar";
import Navigation from "./components/Navigation";
import CollectionsList from "./components/CollectionsList";

import Firebase from "../config/Firebase";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 63px - 55px);

  @media (min-width: 1280px) {
    min-height: calc(100vh - 63px);
  }
`;

const Collections = () => {
  const firestore = Firebase.firestore();
  const query = firestore.collection("collections").orderBy("date", "desc");
  const limit = 10;

  const [collections, setCollections] = useState([]);

  const fetchCollections = () => {
    query
      .limit(limit)
      .get()
      .then((snapshots) => {
        setCollections(snapshots.docs);
      });
  };

  useEffect(() => {
    fetchCollections();
  }, []);

  return (
    <div>
      <AppBar />
      <Wrapper>
        <CollectionsList collections={collections} />
      </Wrapper>
      <Navigation />
    </div>
  );
};

export default Collections;
