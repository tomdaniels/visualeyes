import React from 'react';

import * as styles from '../styles/control-panel';

interface ControlPanelProps {
  onReset: Function;
  handleSliderChange: Function;
  handleSortClick: Function;
  numberOfBars: number;
  array: number[];
}

export const ControlPanel: React.FC<ControlPanelProps> = ({
  onReset,
  handleSliderChange,
  handleSortClick,
  numberOfBars,
  array,
}) => {
  return (
    <div css={styles.buttonGroup}>
      <div>
        <button onClick={() => onReset()}>generate new array</button>
        <input
          type="range"
          min={15}
          value={numberOfBars}
          max={200}
          onChange={(e) => handleSliderChange(e.target)}
        />
      </div>
      <div>
        <button onClick={() => handleSortClick(array)}>merge sort!</button>
        <button disabled>quick sort</button>
        <button disabled>insertion sort</button>
      </div>
    </div>
  );
};
