import React from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  Button,
  Text,
  Flex,
} from '@chakra-ui/react';
import { THEME } from '../constants';
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
    <Box w="90%" m="8px auto">
      <Flex justifyContent="space-between" align="center">
        <Flex align="center">
          <Button
            variant="outline"
            color={`${THEME.primary.colour}.500`}
            colorScheme={THEME.secondary.colour}
            borderColor={`${THEME.secondary.colour}.400`}
            onClick={() => onReset()}
          >
            generate new array
          </Button>
          <Box ml={4}>
            <Slider
              min={15}
              max={200}
              colorScheme={THEME.secondary.colour}
              aria-label="sample-size"
              defaultValue={numberOfBars}
              onChange={(v) => handleSliderChange(v)}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text>sample size: {numberOfBars}</Text>
          </Box>
        </Flex>
        <div>
          <Button
            variant="ghost"
            colorScheme={THEME.primary.colour}
            onClick={() => handleSortClick(array)}
          >
            merge sort!
          </Button>
          <Button variant="ghost" colorScheme={THEME.primary.colour} disabled>
            quick sort
          </Button>
          <Button variant="ghost" colorScheme={THEME.primary.colour} disabled>
            insertion sort
          </Button>
        </div>
      </Flex>
    </Box>
  );
};

export default ControlPanel;
