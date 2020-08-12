import React from "react";
import styled from "@emotion/styled";

import { neutral, typeScale } from "../utils";

const Label = styled.label`
  display: block;
  color: ${neutral[100]};
  margin-bottom: 10px;
`;
const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  background-color: ${neutral[300]};
  border: none;
  font-size: ${typeScale.paragraph};
`;

const Input = ({ label, value, onChange }) => {
  return (
    <Label htmlFor={label}>
      {label}
      <StyledInput id={label} value={value} onChange={onChange} />
    </Label>
  );
};

export default Input;
