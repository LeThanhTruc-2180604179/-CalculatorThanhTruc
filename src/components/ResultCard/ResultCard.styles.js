import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #111;
  color: white;
  border-radius: 10px;
  padding: 2rem;
  height: 100%;
`;

export const CardSection = styled.div`
  margin-bottom: 2rem;
`;

export const LoanAmount = styled.div`
  margin-bottom: 1rem;
`;

export const AmountLabel = styled.div`
  font-size: 1.2rem; /* Updated to match CTAPrompt */
  font-weight: bold; /* Already added for bold */
  margin-bottom: 0.5rem;
`;

export const Amount = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

export const AmountNote = styled.div`
  font-size: 0.8rem;
  color: #ccc;
`;

export const MonthlyPayment = styled.div`
  margin-bottom: 1rem;
`;

export const CTASection = styled.div`
  margin-top: 3rem;
`;

export const CTAPrompt = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const CTAText = styled.div`
  font-size: 0.8rem;
  color: #ccc;
  margin-bottom: 1.5rem;
`;

export const InvalidAmount = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

export const CTAButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #ff8c00;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  
  &:hover {
    background-color: #e67e00;
  }
`;