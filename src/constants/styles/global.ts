import { css } from '@emotion/react';

export const GlobalStyle = css`
  html,
  body {
    padding: 0;
    margin: 0;
    min-width: 375px;
  }

  *,
  *:before,
  *:after {
    font-family: SUIT;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    border: none;
  }

  button {
    background: none;
    padding: 0;
    border: none;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;
