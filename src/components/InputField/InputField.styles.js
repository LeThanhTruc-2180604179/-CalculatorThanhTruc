// InputField.styles.js
import styled from 'styled-components';

export const InputContainer = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${props => (props.error ? '#ff3333' : '#e0e0e0')};
  border-radius: 4px;
  background-color: #f9f9f9;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${props => (props.error ? '#ff3333' : '#ff8c00')};
  }

  &::placeholder {
    color: #777;
    font-size: 0.9rem;
    opacity: 0.8;
  }
`;