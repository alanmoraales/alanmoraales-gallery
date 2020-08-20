import React from "react";

import styled from "@emotion/styled";

import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

import ViewAgendaIcon from "@material-ui/icons/ViewAgenda";
import ViewArrayIcon from "@material-ui/icons/ViewArray";

import CollectionsControls from "./CollectionsControls";

import { typeScale, fontWeight, primaryFont } from "../utils";

const Bar = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;

  margin-top: 20px;
  margin-bottom: 20px;
`;

const Title = styled.p`
  margin: 0;
  font-size: ${typeScale.header5};
  font-weight: ${fontWeight.medium};
  font-family: ${primaryFont};
`;

const Controls = styled.div`
  display: none;
  width: 300px;
  @media (min-width: 1280px) {
    display: block;
  }
`;

const CollectionsBar = ({
  onChange,
  singleViewState,
  onPrevius,
  onNext,
  currentIndex,
  length,
  singleView,
}) => {
  return (
    <div>
      <Bar>
        <Title>Collections</Title>
        {singleView ? (
          <Controls>
            <CollectionsControls
              onPrevius={onPrevius}
              onNext={onNext}
              currentIndex={currentIndex}
              length={length}
            />
          </Controls>
        ) : null}
        <ToggleButtonGroup
          size="small"
          value={singleViewState}
          exclusive
          onChange={onChange}
          aria-label="view mode"
        >
          <ToggleButton value={false} aria-label="list view">
            <ViewAgendaIcon />
          </ToggleButton>
          <ToggleButton value={true} aria-label="single view">
            <ViewArrayIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Bar>
    </div>
  );
};

export default CollectionsBar;
