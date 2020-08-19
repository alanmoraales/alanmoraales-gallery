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
`;

const ImageArea = styled.div`
  width: 100vw;
  height: calc((100vh / 4) * 2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 97vw;
  max-height: calc(((100vh / 4) * 2) - 20px);
`;

const TextArea = styled.div`
  padding: 20px;
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
`;

const FullImageArea = styled.div`
  width: 100vw;
  height: 100vh;
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
