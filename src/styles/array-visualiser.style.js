import { css } from '@emotion/react';
import { THEME } from '../constants';

export const grid = css`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const element = (height, width) => css`
  width: ${width}px;
  height: ${height}px;
  border: 1px solid ${THEME.primary.hex};
  margin: 0 1px;
`;
