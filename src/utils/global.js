import { css } from "@emotion/core";

import { primaryFont } from "./typography";

export const global = css`
  html {
    font-size: 16px;
    box-sizing: border-box;
    max-width: 2000px;
    margin: 0 auto;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: ${primaryFont};
    max-width: 2000px;
    margin: 0 auto;
  }
`;
