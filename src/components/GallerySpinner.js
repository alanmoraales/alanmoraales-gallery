import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";
import { blue } from "../utils";

const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 55px - 63px);
  align-items: center;
  justify-content: center;
`;

const override = css`
  display: block;
  margin: 0 auto;
`;

const GallerySpinner = () => {
  return (
    <SpinnerWrapper>
      <PulseLoader size={10} color={blue[400]} />
    </SpinnerWrapper>
  );
};

export default GallerySpinner;
