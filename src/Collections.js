import React, { useState, useEffect } from "react";

import styled from "@emotion/styled";

import AppBar from "./components/AppBar";
import Navigation from "./components/Navigation";
import CollectionsList from "./components/CollectionsList";
import SingleCollectionView from "./components/SingleCollectionView";
import CollectionsBar from "./components/CollectionsBar";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [singleView, setSingleView] = useState(false);
  const [listOffset, setListOffset] = useState(0);

  const fetchCollections = () => {
    query
      .limit(limit)
      .get()
      .then((snapshots) => {
        const collec = snapshots.docs.map((doc) => ({
          name: doc.data().name,
          id: doc.data().id,
          description: doc.data().description,
          images: doc.data().images,
        }));
        setCollections(collec);
      });
  };

  useEffect(() => {
    fetchCollections();
  }, []);

  const onCardClick = (index) => {
    setCurrentIndex(index);
    toggleView();
  };

  const toggleView = () => {
    if (!singleView) {
      setListOffset(window.scrollY);
    }
    setSingleView(!singleView);
  };

  return (
    <div>
      <AppBar />
      <CollectionsBar onChange={toggleView} singleViewState={singleView} />
      <Wrapper>
        {singleView ? (
          <SingleCollectionView
            collections={collections}
            currentIndex={currentIndex}
          />
        ) : (
          <CollectionsList
            collections={collections}
            onCardClick={onCardClick}
            yOffset={listOffset}
          />
        )}
      </Wrapper>
      <Navigation />
    </div>
  );
};

export default Collections;
