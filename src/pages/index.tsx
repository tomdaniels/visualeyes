import type { NextPage } from 'next';
import { useState } from 'react';
import { flushSync } from 'react-dom';
import mergeSort from 'src/algo/merge-sort';
import ArrayVisualiser from 'src/components/array-visualiser/index';

const Visualeyes: NextPage = () => {
  const [array, setArray] = useState([4, 7, 6, 3, 5, 2, 9]);
  function handleClick(array: number[]) {
    const result = mergeSort(array);

    for (let i = 0; i < array.length; i++) {
      setTimeout(() => {
        array[i] = result[i];
        flushSync(() => {
          console.log(array);
          setArray(array);
        });
      }, 350 * i);
    }
  }
  return (
    <div>
      <ArrayVisualiser array={[...array]} handleClick={handleClick} />
    </div>
  );
};

export default Visualeyes;
