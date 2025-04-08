import React, { useRef, useEffect } from 'react';
import {
  SliderContainer,
  Label,
  SliderWrapper,
  RangeContainer,
  Range,
  RangeLabels,
  RangeLabel,
  UnitLabel,
  CurrentValueBox
} from './Slider.styles';

const Slider = ({ label, min, max, value, onChange, unit }) => {
  const rangeRef = useRef(null);

  // Tính phần trăm tiến trình và gán vào biến CSS --range-progress
  useEffect(() => {
    if (rangeRef.current) {
      const percentage = ((value - min) / (max - min)) * 100;
      // Gán biến CSS --range-progress = "xx%"
      rangeRef.current.style.setProperty('--range-progress', `${percentage}%`);
    }
  }, [value, min, max]);

  return (
    <SliderContainer>
      <Label>{label}</Label>
      <SliderWrapper>
        <UnitLabel>{unit}</UnitLabel>
        <RangeContainer>
          <Range
            ref={rangeRef}
            type="range"
            min={min}
            max={max}
            value={value}
            onChange={onChange}
          />
          <RangeLabels>
            <RangeLabel>{min}</RangeLabel>
            <RangeLabel>{max}</RangeLabel>
          </RangeLabels>
        </RangeContainer>
        <CurrentValueBox>{value}</CurrentValueBox>
      </SliderWrapper>
    </SliderContainer>
  );
};

export default Slider;
