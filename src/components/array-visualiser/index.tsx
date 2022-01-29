import { ReactElement, useState, useEffect } from 'react';
import randomIntBetween from 'src/utils/random-int-between';
import animateMergeSort from 'src/algo/merge-sort';

import * as styles from '../../styles/array-visualiser.style';

const PRIMARY_COLOR = 'red';
const SECONDARY_COLOR = 'black';
const NUMBER_OF_ARRAY_BARS = 120;
const ANIMATION_SPEED_MS = 20;

export default function ArrayVisualiser(): ReactElement {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [array, setArray] = useState<number[]>([]);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      resetArray();
    }
  }, [isMounted, array]);

  function resetArray(): void {
    const newArray = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      newArray.push(randomIntBetween(20, 1000));
    }

    setArray(newArray);
  }

  function handleClick(array: number[]) {
    animateMergeSort(array, PRIMARY_COLOR, SECONDARY_COLOR, ANIMATION_SPEED_MS);
  }

  return (
    <>
      <button onClick={() => handleClick(array)}>sort!</button>
      <div css={styles.grid}>
        {array.map((value, idx) => (
          <div className="array-bar" css={styles.element(value)} key={idx} />
        ))}
      </div>
    </>
  );
}
