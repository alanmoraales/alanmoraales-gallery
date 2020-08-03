import { css } from "@emotion/core";

import { primaryFont } from "./typography";

export const global = css`
  html {
    font-size: 16px;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: ${primaryFont};
  }
`;
