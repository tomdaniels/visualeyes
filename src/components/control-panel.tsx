import React from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  Button,
  Flex,
} from '@chakra-ui/react';

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
    <Box w="90%" m="8px auto 0">
      <Flex justifyContent="space-between" align="center">
        <div>
          <Button
            variant="outline"
            color="pink.500"
            colorScheme="yellow"
            borderColor="yellow.400"
            onClick={() => onReset()}
          >
            generate new array
          </Button>
          <Slider
            min={15}
            max={200}
            colorScheme="yellow"
            aria-label="sample-size"
            defaultValue={numberOfBars}
            onChange={(v) => handleSliderChange(v)}
          >
            <SliderTrack>
              <SliderFilledTrack
                onChange={(e) => handleSliderChange(e.target)}
              />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </div>
        <div>
          <Button
            variant="ghost"
            colorScheme="pink"
            onClick={() => handleSortClick(array)}
          >
            merge sort!
          </Button>
          <Button variant="ghost" colorScheme="pink" disabled>
            quick sort
          </Button>
          <Button variant="ghost" colorScheme="pink" disabled>
            insertion sort
          </Button>
        </div>
      </Flex>
    </Box>
  );
};

export default ControlPanel;
