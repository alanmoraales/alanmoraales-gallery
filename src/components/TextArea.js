import React from "react";
import styled from "@emotion/styled";

import { neutral, typeScale } from "../utils";

const Label = styled.label`
  display: block;
  color: ${neutral[100]};
  margin-bottom: 10px;
`;
const StyledTextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  background-color: ${neutral[300]};
  border: none;
  resize: none;
  font-size: ${typeScale.paragraph};
`;

const TextArea = ({ label, value, onChange }) => {
  return (
    <Label htmlFor={label}>
      {label}
      <StyledTextArea id={label} value={value} onChange={onChange} rows="10" />
    </Label>
  );
};

export default TextArea;
