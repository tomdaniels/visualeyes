import { ReactElement, useState, useEffect, useCallback } from 'react';
import ControlPanel from './control-panel';
import randomIntBetween from '../utils/random-int-between';
import clearNodeStyles from '../utils/clear-node-styles';
import { STATUS, NUMBER_OF_ARRAY_BARS } from '../constants';
import runAnimatedAlgorithm from '../animations';

import * as styles from '../styles/array-visualiser.style';

export default function ArrayVisualiser(): ReactElement {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [status, setStatus] = useState<STATUS>(STATUS.CLEAN);
  const [array, setArray] = useState<number[]>([]);
  const [numberOfBars, setNumberOfBars] =
    useState<number>(NUMBER_OF_ARRAY_BARS);

  const resetArray = useCallback(
    (length: number = 0): void => {
      if (status === STATUS.SORTED) {
        clearNodeStyles('array-bar');
        setStatus(STATUS.CLEAN);
      }

      const newArray = [];
      for (let i = 0; i < (length !== 0 ? length : numberOfBars); i++) {
        newArray.push(randomIntBetween(20, 950));
      }
      setArray(newArray);
    },
    [numberOfBars, status]
  );

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      resetArray();
    }
  }, [resetArray, isMounted, array]);

  function handleClick(type: string, array: number[]) {
    if (status === STATUS.RUNNING) {
      return;
    }
    setStatus(STATUS.RUNNING);
    runAnimatedAlgorithm(type, array, () => setStatus(STATUS.SORTED));
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
        status={status}
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
