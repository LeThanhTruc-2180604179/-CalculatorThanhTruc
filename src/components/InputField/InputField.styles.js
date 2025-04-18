import styled from 'styled-components';

export const InputContainer = styled.div`
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1.2rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  
  @media (max-width: 480px) {
    margin-bottom: 0.4rem;
    font-size: 0.9rem;
  }
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
  
  @media (max-width: 768px) {
    padding: 0.7rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem;
    font-size: 0.9rem;
    
    &::placeholder {
      font-size: 0.8rem;
    }
  }
`;