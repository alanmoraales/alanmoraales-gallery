import React, { useState, useEffect } from "react";

import styled from "@emotion/styled";

import CollectionsControls from "./CollectionsControls";

import { typeScale, primaryFont, secondaryFont, fontWeight } from "../utils";

import Firebase from "../../config/Firebase";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageArea = styled.div`
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

const SingleCollectionView = ({
  collections,
  currentIndex,
  onPrevius,
  onNext,
  length,
}) => {
  const [imagesURL, setImagesURL] = useState([]);
  const [thumbsURL, setThumbsURL] = useState([]);

  const firestore = Firebase.firestore();
  const query = firestore.collection("images");

  useEffect(() => {
    window.scrollTo(0, 0);

    /*
    collections[currentIndex].images.forEach((image) => {
      query
        .doc(image)
        .get()
        .then((doc) => {
          const data = doc.data();
          setImagesURL(imagesURL.concat([data.src]));
          setThumbsURL(thumbsURL.concat([data.thumbnail]));
        });
    });
    */
    const thumbs = [];
    query
      .doc(collections[currentIndex].images[0])
      .get()
      .then((doc) => {
        thumbs.push(doc.data().thumbnail);
        setThumbsURL(thumbs);
      });
  }, [currentIndex]);

  return (
    <div>
      <Wrapper>
        <ImageArea>
          <Image src={thumbsURL[0] ? thumbsURL[0] : ""} alt="cover" />
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
