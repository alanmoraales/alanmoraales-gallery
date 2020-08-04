import React from "react";
import styled from "@emotion/styled";

import { typeScale } from "../utils";

const MessageWrapper = styled.div`
  margin-left: 5px;
  margin-top: 10px;
  margin-bottom: 30px;
  font-size: ${typeScale.helperText};
`;

const EndGalleryMessage = () => {
  return <MessageWrapper>by alanmoraales.</MessageWrapper>;
};

export default EndGalleryMessage;
