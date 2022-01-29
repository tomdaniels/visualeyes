import { css } from '@emotion/react';

export const grid = css`
  display: flex;
  justify-content: center;
`;

export const element = (height) => css`
  width: 10px;
  height: ${height}px;
  border: 1px solid pink;
  margin: 0 1px;
`;
