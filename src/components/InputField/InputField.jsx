import React from 'react';
import { InputContainer, Label, Input } from './InputField.styles';

const InputField = ({ label, value, onChange, note, error, onBlur, onFocus }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent default form submission behavior
      onBlur(e); // Trigger the blur handler to save the value
    }
  };

  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={handleKeyDown}
        error={error}
        placeholder={note}
      />
    </InputContainer>
  );
};

export default InputField;