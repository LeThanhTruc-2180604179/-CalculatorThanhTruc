import styled from 'styled-components';

export const AboutContainer = styled.div`
  padding: 2rem 0;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 0.8rem;
  }
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
  font-weight: bold;
  font-size: 2rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1rem;
    font-size: 1.6rem;
  }
`;

export const Section = styled.section`
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ff3333;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
  }
`;

export const Text = styled.p`
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 1rem;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 0.8rem;
  }
`;

export const FeatureList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  
  @media (max-width: 480px) {
    padding-left: 1.2rem;
  }
`;

export const FeatureItem = styled.li`
  margin-bottom: 0.5rem;
  line-height: 1.6;
  
  @media (max-width: 480px) {
    margin-bottom: 0.4rem;
    font-size: 0.9rem;
  }
`;