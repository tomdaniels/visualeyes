import { useState } from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Tooltip,
} from '@chakra-ui/react';
import { THEME } from '../constants';

interface SliderProps {
  handleChange: Function;
  numberOfBars: number;
}

const SliderWithTooltip: React.FC<SliderProps> = ({
  handleChange,
  numberOfBars,
}) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  return (
    <Slider
      mt={2}
      min={15}
      max={200}
      colorScheme={THEME.secondary.colour}
      aria-label="sample-size"
      defaultValue={numberOfBars}
      onChange={(v) => handleChange(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg={`${THEME.secondary.colour}.500`}
        color="white"
        placement="bottom"
        isOpen={showTooltip}
        label={`${numberOfBars}`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
  );
};

export default SliderWithTooltip;
