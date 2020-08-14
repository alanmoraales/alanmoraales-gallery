import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import InfiniteScroll from "react-infinite-scroll-component";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

import GallerySpinner from "./GallerySpinner";
import EndGalleryMessage from "./EndGalleryMessage";

import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const InfiniteGallery = ({ thumbnails, photos, next, hasMore }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);

  const openViewer = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerOpen(true);
  }, []);

  const closeViewer = () => {
    setViewerOpen(false);
  };

  return (
    <Wrapper>
      <InfiniteScroll
        dataLength={thumbnails.length}
        next={next}
        hasMore={hasMore}
        loader={<GallerySpinner />}
        endMessage={<EndGalleryMessage />}
      >
        <Gallery photos={thumbnails} margin={5} onClick={openViewer} />
      </InfiniteScroll>
      {viewerOpen ? (
        <Lightbox
          image={photos[currentImage].src}
          title="alanmoraales"
          onClose={closeViewer}
          allowRotate={false}
          allowReset={false}
        />
      ) : null}
    </Wrapper>
  );
};

export default InfiniteGallery;
