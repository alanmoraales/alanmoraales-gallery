import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";
import { blue } from "../utils";

const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  width: 95%;
`;

const override = css`
  display: block;
  margin: 0 auto;
`;

const GallerySpinner = () => {
  return (
    <SpinnerWrapper>
      <PulseLoader size={10} color={blue[400]} css={override} />
    </SpinnerWrapper>
  );
};

export default GallerySpinner;
