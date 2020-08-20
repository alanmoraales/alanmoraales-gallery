import React, { useState, useEffect } from "react";

import styled from "@emotion/styled";

import CollectionsControls from "./CollectionsControls";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import { typeScale, primaryFont, secondaryFont, fontWeight } from "../utils";

import Firebase from "../../config/Firebase";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1280px) {
    margin: 0 auto;
    width: 90%;
    max-width: 2000px;
    display: grid;
    grid-template-columns: 60% 40%;
    align-items: start;

    height: calc(100vh - 63px - 80px);
    box-sizing: border-box;
    padding-bottom: 20px;
  }
`;

const ImageArea = styled.div`
  margin: 0 auto;
  max-width: 100%;
  width: 100vw;
  height: calc((100vh / 4) * 2);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1280px) {
    height: calc(100vh - 63px - 80px);
    max-height: 600px;
    width: calc((100vw * 0.9) * 0.6);
    padding-bottom: 20px;
  }

  @media (min-width: 2000px) {
    width: calc((2000px * 0.9) * 0.6);
  }
`;

const Image = styled.img`
  max-width: 97vw;
  max-height: calc(((100vh / 4) * 2));

  @media (min-width: 1280px) {
    max-height: 100%;
    max-width: 100%;
  }
`;

const TextArea = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  max-width: 2000px;
  width: 90%;
  margin: 0 auto;

  @media (min-width: 1280px) {
    overflow-y: scroll;
    padding: 20px;
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: ${typeScale.header4};
  font-family: ${secondaryFont};
  font-weight: ${fontWeight.medium};
`;

const Description = styled.p`
  font-size: ${typeScale.paragraph};
  font-family: ${primaryFont};
  font-weight: ${fontWeight.normal};
`;

const Controls = styled.div`
  position: sticky;
  bottom: 55px;

  @media (min-width: 1280px) {
    display: none;
  }
`;

const FullImageArea = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FullImage = styled.img`
  max-width: 95vw;
  max-height: 95vh;
`;
const CustomImage = (item) => {
  return (
    <ImageArea>
      <Image src={item.original} />
    </ImageArea>
  );
};

const CustomFullImage = (item) => {
  return (
    <FullImageArea>
      <FullImage src={item.fullscreen} />
    </FullImageArea>
  );
};

const SingleCollectionView = ({
  collections,
  currentIndex,
  onPrevius,
  onNext,
  length,
}) => {
  const [images, setImages] = useState([{ original: "" }]);
  const [fullscreenMode, setFullscreenMode] = useState(false);

  const firestore = Firebase.firestore();

  const query = firestore
    .collection("images")
    .where("collections", "array-contains", collections[currentIndex].id);

  useEffect(() => {
    window.scrollTo(0, 0);

    query.get().then((snapshots) => {
      const URLS = snapshots.docs.map((image) => ({
        original: image.data().thumbnail,
        fullscreen: image.data().src,
      }));
      setImages(URLS);
    });
  }, [currentIndex]);

  const toggleFullscren = (value) => setFullscreenMode(value);

  return (
    <div>
      <Wrapper>
        <ImageArea>
          <ImageGallery
            items={images}
            showThumbnails={false}
            showBullets={true}
            showPlayButton={false}
            renderItem={fullscreenMode ? CustomFullImage : CustomImage}
            onScreenChange={toggleFullscren}
          />
        </ImageArea>
        <TextArea>
          <Title>{collections[currentIndex].name}</Title>
          <Description>{collections[currentIndex].description}</Description>
        </TextArea>
      </Wrapper>
      <Controls>
        <CollectionsControls
          onPrevius={onPrevius}
          onNext={onNext}
          currentIndex={currentIndex}
          length={length}
        />
      </Controls>
    </div>
  );
};

export default SingleCollectionView;
