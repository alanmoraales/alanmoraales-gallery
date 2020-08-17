import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import InfiniteScroll from "react-infinite-scroll-component";
import Modal from "react-modal";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

import GallerySpinner from "./GallerySpinner";
import EndGalleryMessage from "./EndGalleryMessage";

import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const customStyles = {
  overlay: { zIndex: 2 },
};

Modal.setAppElement("#modal");

const InfiniteGallery = ({ thumbnails, photos, next, hasMore }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [windowOffset, setWindowOffset] = useState(0);

  const openViewer = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerOpen(true);
  }, []);

  const closeViewer = () => {
    setViewerOpen(false);
    document.body.removeAttribute("style");
    window.scrollTo(0, windowOffset);
  };

  const onOpen = () => {
    //document.body.style.overflow = "hidden";
    setWindowOffset(window.scrollY);
    document.body.setAttribute(
      "style",
      `position: fixed; top: -${windowOffset}px; left:0; right: 0;`
    );
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
      <Modal
        isOpen={viewerOpen}
        onAfterOpen={onOpen}
        OnRequestClose={closeViewer}
        style={customStyles}
      >
        <Lightbox
          image={photos[currentImage].src}
          title="alanmoraales"
          onClose={closeViewer}
          allowRotate={false}
          allowReset={false}
        />
      </Modal>
    </Wrapper>
  );
};

export default InfiniteGallery;
