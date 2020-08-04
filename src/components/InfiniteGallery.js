import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import InfiniteScroll from "react-infinite-scroll-component";

import GallerySpinner from "./GallerySpinner";

import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const InfiniteGallery = ({ thumbnails, next, hasMore }) => {
  return (
    <Wrapper>
      <InfiniteScroll
        dataLength={thumbnails.length}
        next={next}
        hasMore={hasMore}
        loader={<GallerySpinner />}
        endMessage={<p>No more elements.</p>}
      >
        <Gallery photos={thumbnails} margin={5} />
      </InfiniteScroll>
    </Wrapper>
  );
};

export default InfiniteGallery;
