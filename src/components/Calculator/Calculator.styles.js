// Calculator.styles.js
import styled from 'styled-components';

export const CalculatorContainer = styled.div`
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const CalculatorLayout = styled.div`
  display: flex;
  gap: 20px;
`;

export const InputsSection = styled.div`
  flex: 1;
`;

export const ResultsSection = styled.div`
  flex: 1;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;