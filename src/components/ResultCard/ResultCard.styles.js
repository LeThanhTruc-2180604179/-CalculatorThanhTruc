import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #111;
  color: white;
  border-radius: 10px;
  padding: 2rem;
  height: 100%;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.2rem;
  }
`;

export const CardSection = styled.div`
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1.2rem;
  }
`;

export const LoanAmount = styled.div`
  margin-bottom: 1rem;
  
  @media (max-width: 480px) {
    margin-bottom: 0.8rem;
  }
`;

export const AmountLabel = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.4rem;
  }
`;

export const Amount = styled.div`
  font-size: 2rem;
  font-weight: bold;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export const AmountNote = styled.div`
  font-size: 0.8rem;
  color: #ccc;
  
  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export const MonthlyPayment = styled.div`
  margin-bottom: 1rem;
  
  @media (max-width: 480px) {
    margin-bottom: 0.8rem;
  }
`;

export const CTASection = styled.div`
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
  
  @media (max-width: 480px) {
    margin-top: 1.5rem;
  }
`;

export const CTAPrompt = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.8rem;
  }
`;

export const CTAText = styled.div`
  font-size: 0.8rem;
  color: #ccc;
  margin-bottom: 1.5rem;
  
  @media (max-width: 480px) {
    font-size: 0.7rem;
    margin-bottom: 1.2rem;
  }
`;

export const InvalidAmount = styled.div`
  font-size: 2rem;
  font-weight: bold;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
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
  
  @media (max-width: 768px) {
    padding: 0.9rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem;
    font-size: 0.9rem;
  }
`;