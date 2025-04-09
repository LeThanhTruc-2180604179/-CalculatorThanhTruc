import React from 'react';
import { InputContainer, Label, Input, Note } from './InputField.styles';

const InputField = ({ label, value, onChange, note, error }) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input value={value} onChange={onChange} error={error} />
      {note && <Note>{note}</Note>}
    </InputContainer>
  );
};

export default InputField;