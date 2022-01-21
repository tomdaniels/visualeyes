import { ReactElement, useState, useEffect } from 'react';
import randomIntBetween from 'src/utils/random-int-between';
import mergeSort from 'src/algo/merge-sort';

import * as styles from '../../styles/array-visualiser.style';

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
    for (let i = 0; i < 10; i++) {
      newArray.push(randomIntBetween(20, 1000));
    }

    setArray(newArray);
  }

  function handleClick(array: number[]) {
    const result = mergeSort(array);

   result.animations.forEach(animation => {
     console.log('to animate', animation.pair, animation.committed);
   })
  }

  return (
    <>
      <button onClick={() => handleClick(array)}>sort!</button>
      <div css={styles.grid}>
        {array.map((elem, idx) => (
          <div id={`${idx}`} key={idx} css={styles.element(elem)}>
            {elem}
          </div>
        ))}
      </div>
    </>
  );
}
