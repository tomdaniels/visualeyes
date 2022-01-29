import { css } from '@emotion/react';

export const grid = css`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const element = (height, width) => css`
  width: ${width}px;
  height: ${height}px;
  border: 1px solid pink;
  margin: 0 1px;
`;
