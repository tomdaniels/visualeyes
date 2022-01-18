import { css } from '@emotion/react';

export const grid = css`
  display: flex;
  justify-content: center;
`;

export const element = (height) => css`
  height: ${height}px;
  border: 1px solid red;
  margin: 0 10px;
`;
