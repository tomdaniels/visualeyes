import { ReactElement, useState, useEffect } from 'react';
import randomIntBetween from 'src/utils/random-int-between';
import animateMergeSort from 'src/algo/merge-sort';

import * as styles from '../../styles/array-visualiser.style';

const PRIMARY_COLOR = 'pink';
const SECONDARY_COLOR = 'yellow';
const NUMBER_OF_ARRAY_BARS = 125;
const ANIMATION_SPEED_MS = 10;

export default function ArrayVisualiser(): ReactElement {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isSorted, setIsSorted] = useState<boolean>(false);
  const [array, setArray] = useState<number[]>([]);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      resetArray();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted, array]);

  function resetArray(): void {
    if (isSorted) {
      const nodes = Array.from(
        document.getElementsByClassName(
          'array-bar'
        ) as HTMLCollectionOf<HTMLElement>
      );
      nodes.forEach((elem) => elem.setAttribute('style', ''));
    }
    const newArray = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      newArray.push(randomIntBetween(20, 1000));
    }

    setIsSorted(false);
    setArray(newArray);
  }

  function handleClick(array: number[]) {
    if (isSorted) {
      return;
    }

    animateMergeSort(array, PRIMARY_COLOR, SECONDARY_COLOR, ANIMATION_SPEED_MS);
    setIsSorted(true);
  }

  return (
    <>
      <div css={styles.buttonGroup}>
        <button onClick={() => resetArray()}>generate new array</button>
        <div>
          <button onClick={() => handleClick(array)}>merge sort!</button>
          <button disabled>quick sort</button>
          <button disabled>insertion sort</button>
        </div>
      </div>
      <div css={styles.grid}>
        {array.map((value, idx) => (
          <div className="array-bar" css={styles.element(value)} key={idx} />
        ))}
      </div>
    </>
  );
}
