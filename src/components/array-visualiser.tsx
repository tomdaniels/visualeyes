import { ReactElement, useState, useEffect, useCallback } from 'react';
import ControlPanel from './control-panel';
import randomIntBetween from '../utils/random-int-between';
import animateMergeSort from '../animations/merge-sort';
import clearNodeStyles from '../utils/clear-node-styles';
import { NUMBER_OF_ARRAY_BARS } from '../constants';

import * as styles from '../styles/array-visualiser.style';

export default function ArrayVisualiser(): ReactElement {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isSorted, setIsSorted] = useState<boolean>(false);
  const [array, setArray] = useState<number[]>([]);
  const [numberOfBars, setNumberOfBars] =
    useState<number>(NUMBER_OF_ARRAY_BARS);

  const resetArray = useCallback(
    (length: number = 0): void => {
      if (isSorted) {
        clearNodeStyles('array-bar');
      }

      const newArray = [];
      for (let i = 0; i < (length !== 0 ? length : numberOfBars); i++) {
        newArray.push(randomIntBetween(20, 1000));
      }
      setIsSorted(false);
      setArray(newArray);
    },
    [numberOfBars, isSorted]
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

    animateMergeSort(array);
    setIsSorted(true);
  }

  function handleSlider(newCount: number) {
    setNumberOfBars(newCount);
    resetArray(newCount);
  }

  return (
    <>
      <ControlPanel
        onReset={resetArray}
        handleSliderChange={handleSlider}
        handleSortClick={handleClick}
        numberOfBars={numberOfBars}
        array={array}
      />
      <div css={styles.grid}>
        {array.map((value, idx) => (
          <div
            key={idx}
            className="array-bar"
            css={styles.element(
              value,
              numberOfBars <= 20
                ? numberOfBars * 10
                : numberOfBars <= 60
                ? numberOfBars * 5
                : numberOfBars / 2
            )}
          />
        ))}
      </div>
    </>
  );
}
