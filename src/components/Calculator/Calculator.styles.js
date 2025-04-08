import styled from 'styled-components';

export const CalculatorContainer = styled.div`
  padding: 2rem 0;
`;


export const ErrorMessage = styled.div`
  color: #ff3333;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
  font-size: 0.8rem;
`;
export const Title = styled.h1`
  margin-bottom: 2rem;
  font-weight: bold;
  font-size: 2rem;
`;

export const CalculatorLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const InputsSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ResultsSection = styled.div``;

export const NumberInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background-color: #f9f9f9;
  font-size: 1rem;
`;