import styled from 'styled-components';

export const CalculatorContainer = styled.div`
  padding: 20px;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
  
  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const CalculatorLayout = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const InputsSection = styled.div`
  flex: 1;
`;

export const ResultsSection = styled.div`
  flex: 1;
  
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;