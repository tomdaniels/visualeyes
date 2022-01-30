import React, { useState } from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  Button,
  Tooltip,
  Flex,
} from '@chakra-ui/react';
import { THEME, ALGOS } from '../constants';

interface ControlPanelProps {
  onReset: Function;
  handleSliderChange: Function;
  handleSortClick: Function;
  numberOfBars: number;
  array: number[];
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  onReset,
  handleSliderChange,
  handleSortClick,
  numberOfBars,
  array,
}) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  return (
    <Box w="90%" m="8px auto 2px">
      <Flex justifyContent="space-between" align="center">
        <Box>
          <Button
            variant="outline"
            color={`${THEME.primary.colour}.500`}
            colorScheme={THEME.secondary.colour}
            borderColor={`${THEME.secondary.colour}.400`}
            onClick={() => onReset()}
          >
            generate new array
          </Button>
          <Slider
            mt={2}
            min={15}
            max={200}
            colorScheme={THEME.secondary.colour}
            aria-label="sample-size"
            defaultValue={numberOfBars}
            onChange={(v) => handleSliderChange(v)}
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
        </Box>
        <div>
          <Button
            variant="ghost"
            colorScheme={THEME.primary.colour}
            onClick={() => handleSortClick(ALGOS.MERGE_SORT, array)}
          >
            merge sort!
          </Button>
          <Button
            variant="ghost"
            colorScheme={THEME.primary.colour}
            onClick={() => {
              handleSortClick(ALGOS.QUICK_SORT, array);
            }}
          >
            quick sort
          </Button>
          <Button
            variant="ghost"
            colorScheme={THEME.primary.colour}
            disabled
            // onClick={() => handleSortClick(ALGOS.INSERTION_SORT, array)}
          >
            insertion sort
          </Button>
        </div>
      </Flex>
    </Box>
  );
};

export default ControlPanel;
