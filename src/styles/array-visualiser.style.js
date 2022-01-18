import { css } from '@emotion/react';

export const grid = css`
  display: flex;
  justify-content: center;
`;

export const element = (height, position) => css`
  order: ${position};
  height: ${height * 100}px;
  border: 1px solid red;
  margin: 0 10px;
`;
