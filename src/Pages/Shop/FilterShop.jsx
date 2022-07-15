import { useState } from 'react'

import {
  Box,
  Heading,
  Input,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Tooltip,
} from '@chakra-ui/react'

const FilterShop = () => {
  const [sliderValue, setSliderValue] = useState(5)
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <Box display="flex" flexDirection="column">
      <Heading> Productos </Heading>
      <Input size="md" w="300px" />
      <Slider
        id="slider"
        defaultValue={5}
        min={0}
        max={100}
        w="300px"
        m="20px"
        colorScheme="teal"
        onChange={(v) => setSliderValue(v)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderMark value={25} mt="1" ml="-2.5" fontSize="sm">
          10.000
        </SliderMark>
        <SliderMark value={50} mt="1" ml="-2.5" fontSize="sm">
          20.000
        </SliderMark>
        <SliderMark value={75} mt="1" ml="-2.5" fontSize="sm">
          30.000
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg="teal.500"
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={`${sliderValue}%`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    </Box>
  )
}
export default FilterShop
