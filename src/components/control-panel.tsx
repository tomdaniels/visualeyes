import React from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import Slider from './slider';
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
            handleChange={handleSliderChange}
            numberOfBars={numberOfBars}
          />
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
