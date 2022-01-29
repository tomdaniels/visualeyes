import { ReactElement, useState, useEffect, useCallback } from 'react';
import randomIntBetween from 'src/utils/random-int-between';
import animateMergeSort from 'src/algo/merge-sort';
import clearNodeStyles from 'src/utils/clear-node-styles';

import * as styles from '../../styles/array-visualiser.style';

const PRIMARY_COLOR = 'pink';
const SECONDARY_COLOR = 'yellow';
const NUMBER_OF_ARRAY_BARS = 125;
const ANIMATION_SPEED_MS = 10;

export default function ArrayVisualiser(): ReactElement {
  const [arrayBars, setArrayBars] = useState<number>(NUMBER_OF_ARRAY_BARS);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isSorted, setIsSorted] = useState<boolean>(false);
  const [array, setArray] = useState<number[]>([]);

  const resetArray = useCallback(
    (length: number = 0): void => {
      if (isSorted) {
        clearNodeStyles('array-bar');
      }

      const newArray = [];
      for (let i = 0; i < (length !== 0 ? length : arrayBars); i++) {
        newArray.push(randomIntBetween(20, 1000));
      }
      setIsSorted(false);
      setArray(newArray);
    },
    [arrayBars, isSorted]
  );

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      resetArray();
    }
  }, [resetArray, isMounted, array]);

  function handleClick(array: number[]) {
    if (isSorted) {
      return;
    }

    animateMergeSort(array, PRIMARY_COLOR, SECONDARY_COLOR, ANIMATION_SPEED_MS);
    setIsSorted(true);
  }

  function handleSlider(e: any) {
    setArrayBars(parseInt(e.target.value));
  }

  return (
    <>
      <div css={styles.buttonGroup}>
        <div>
          <button onClick={() => resetArray()}>generate new array</button>
          <input
            type="range"
            min={15}
            value={arrayBars}
            max={200}
            onChange={(e) => handleSlider(e)}
            onMouseUp={(e) =>
              resetArray(
                parseInt((e.target as EventTarget & HTMLInputElement).value)
              )
            }
          />
        </div>
        <div>
          <button onClick={() => handleClick(array)}>merge sort!</button>
          <button disabled>quick sort</button>
          <button disabled>insertion sort</button>
        </div>
      </div>
      <div css={styles.grid}>
        {array.map((value, idx) => (
          <div
            className="array-bar"
            css={styles.element(
              value,
              arrayBars <= 20
                ? arrayBars * 10
                : arrayBars <= 50
                ? arrayBars * 5
                : arrayBars / 2
            )}
            key={idx}
          />
        ))}
      </div>
    </>
  );
}
