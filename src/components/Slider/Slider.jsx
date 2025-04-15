// Slider.jsx
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

const Slider = ({ label, min, max, value, onChange, unit, type = 'time' }) => {
  const rangeRef = useRef(null);

  useEffect(() => {
    if (rangeRef.current) {
      const percentage = ((value - min) / (max - min)) * 100;
      rangeRef.current.style.setProperty('--range-progress', `${percentage}%`);
    }
  }, [value, min, max]);

  // Hiển thị giá trị dựa trên type
  let displayValue, minLabel, maxLabel;
  if (type === 'years') {
    displayValue = `${value} năm`;
    minLabel = `${min} năm`;
    maxLabel = `${max} năm`;
  } else if (type === 'months') {
    displayValue = `${value} tháng`;
    minLabel = `${min} tháng`;
    maxLabel = `${max} tháng`;
  } else if (type === 'percentage') {
    displayValue = `${value}%`;
    minLabel = `${min}%`;
    maxLabel = `${max}%`;
  }

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
            <RangeLabel>{minLabel}</RangeLabel>
            <RangeLabel>{maxLabel}</RangeLabel>
          </RangeLabels>
        </RangeContainer>
        <CurrentValueBox>{displayValue}</CurrentValueBox>
      </SliderWrapper>
    </SliderContainer>
  );
};

export default Slider;