import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
//import { makeStyles } from "@material-ui/core/styles";

import { neutral } from "../utils";

const Wrapper = styled.div`
  width: 100%;
  background-color: ${neutral[300]};
  padding-top: 5px;
  padding-bottom: 5px;

  @media (min-width: 1280px) {
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;
const Grid = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 50% 50%;
`;

const CollectionsControls = ({ onPrevius, onNext, currentIndex, length }) => {
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(true);

  useEffect(() => {
    if (currentIndex === 0) {
      setPrevDisabled(true);
    } else {
      setPrevDisabled(false);
    }

    const lastIndex = length - 1;
    if (currentIndex === lastIndex) {
      setNextDisabled(true);
    } else {
      setNextDisabled(false);
    }
  }, [currentIndex, length]);

  return (
    <Wrapper>
      <Grid>
        <Button
          disabled={prevDisabled}
          startIcon={<ArrowBackIosIcon />}
          onClick={onPrevius}
        >
          previus
        </Button>
        <Button
          disabled={nextDisabled}
          endIcon={<ArrowForwardIosIcon />}
          onClick={onNext}
        >
          next
        </Button>
      </Grid>
    </Wrapper>
  );
};

export default CollectionsControls;
