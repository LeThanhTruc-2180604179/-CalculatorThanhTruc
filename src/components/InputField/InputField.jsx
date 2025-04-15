// InputField.jsx
import React from 'react';
import { InputContainer, Label, Input } from './InputField.styles';

const InputField = ({ label, value, onChange, note, error, onBlur, onFocus }) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        error={error}
        placeholder={note}
      />
    </InputContainer>
  );
};

export default InputField;