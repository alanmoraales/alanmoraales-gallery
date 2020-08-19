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
    min-height: 0px;
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
  const [collectionsLength, setCollectionsLength] = useState(0);
  /*
  images = [
    {
      original: "",
      fullscreen: "",
    }
  ]
  */

  const fetchCollections = () => {
    query
      .limit(limit)
      .get()
      .then((snapshots) => {
        const collec = snapshots.docs.map((doc) => ({
          name: doc.data().name,
          id: doc.data().id,
          description: doc.data().description,
        }));
        setCollections(collec);
        setCollectionsLength(collec.length);
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

  const onPrevius = () => {
    if (currentIndex === 0) {
      return;
    }
    setCurrentIndex(currentIndex - 1);
  };

  const onNext = () => {
    if (currentIndex === collections.length - 1) {
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };
  return (
    <div>
      <AppBar />
      <CollectionsBar
        onChange={toggleView}
        singleViewState={singleView}
        onPrevius={onPrevius}
        onNext={onNext}
        currentIndex={currentIndex}
        length={collectionsLength}
        singleView={singleView}
      />
      <Wrapper>
        {singleView ? (
          <SingleCollectionView
            collections={collections}
            currentIndex={currentIndex}
            onPrevius={onPrevius}
            onNext={onNext}
            length={collectionsLength}
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
