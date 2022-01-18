import { ReactElement } from 'react';

import * as styles from '../../styles/array-visualiser.style';

type Props = {
  array: number[];
  handleClick: Function;
};

export default function ArrayVisualiser({
  array,
  handleClick,
}: Props): ReactElement {
  return (
    <>
      <button onClick={() => handleClick(array)}>
        {array[0] === 1 ? 'sorted' : 'sort'}
      </button>
      <div css={styles.grid}>
        {array.map((elem, idx) => (
          <div id={`${idx}`} key={idx} css={styles.element(elem, idx)}>
            {elem}
          </div>
        ))}
      </div>
    </>
  );
}
