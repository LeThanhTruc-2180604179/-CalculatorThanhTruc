import React, { useState, useEffect } from 'react';
import {
  CalculatorContainer,
  Title,
  CalculatorLayout,
  InputsSection,
  ResultsSection,

  ErrorMessage
} from './Calculator.styles';
import InputField from '../InputField/InputField';
import Slider from '../Slider/Slider';
import ResultCard from '../ResultCard/ResultCard';
import { 
  calculateLoanAmount, 
  calculateMonthlyPayment, 
  formatCurrency 
} from '../../utils/calculator';

const Calculator = () => {
  // State for input values
  const [purchasePrice, setPurchasePrice] = useState(1000000);
  const [downPayment, setDownPayment] = useState(500000);
  const [repaymentYears, setRepaymentYears] = useState(15);
  const [interestRate, setInterestRate] = useState(8);
  
  // State for calculated values
  const [loanAmount, setLoanAmount] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  
  // State for validation
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  // Calculate results whenever inputs change
  useEffect(() => {
    // Validate inputs
    if (downPayment > purchasePrice) {
      setIsValid(false);
      setErrorMessage('Số tiền trả trước không được lớn hơn giá mua');
      setLoanAmount(null);
      setMonthlyPayment(null);
      return;
    }
    
    setIsValid(true);
    setErrorMessage('');
    
    const calculatedLoanAmount = calculateLoanAmount(purchasePrice, downPayment);
    setLoanAmount(calculatedLoanAmount);

    const calculatedMonthlyPayment = calculateMonthlyPayment(
      calculatedLoanAmount,
      interestRate,
      repaymentYears
    );
    setMonthlyPayment(calculatedMonthlyPayment);
  }, [purchasePrice, downPayment, repaymentYears, interestRate]);

  const handlePurchasePriceChange = (e) => {
    let value = e.target.value.replace(/[^\d]/g, '');
    if (value.length > 17) value = value.slice(0, 17); // Giới hạn 17 chữ số
    setPurchasePrice(value ? Number(value) : 0);
  };
  
  const handleDownPaymentChange = (e) => {
    let value = e.target.value.replace(/[^\d]/g, '');
    if (value.length > 17) value = value.slice(0, 17); // Giới hạn 17 chữ số
    setDownPayment(value ? Number(value) : 0);
  };
  

  // Handler for repayment years slider
  const handleRepaymentYearsChange = (e) => {
    setRepaymentYears(Number(e.target.value));
  };

  // Handler for interest rate slider
  const handleInterestRateChange = (e) => {
    setInterestRate(Number(e.target.value));
  };

  return (
    <CalculatorContainer>
      <Title>Mortgage Calculator</Title>
      <CalculatorLayout>
        <InputsSection>
          <InputField
            label="Giá mua"
            value={`$${formatCurrency(purchasePrice)}`}
            onChange={handlePurchasePriceChange}
            note="Nhập giá mua"
          />
          
          <InputField
            label="Trả trước"
            value={`$${formatCurrency(downPayment)}`}
            onChange={handleDownPaymentChange}
            note="Số tiền bạn sẽ trả trước"
            error={!isValid}
          />
          
          {!isValid && <ErrorMessage>{errorMessage}</ErrorMessage>}
          
          <Slider
            label="Thời gian hoàn trả ( năm )"
            min={1}
            max={35}
            value={repaymentYears}
            onChange={handleRepaymentYearsChange}
        
          />
          
          <Slider
            label="Lãi suất %"
            min={0}
            max={20}
            value={interestRate}
            onChange={handleInterestRateChange}
      
          />
        </InputsSection>
        
        <ResultsSection>
          <ResultCard
            loanAmount={loanAmount}
            monthlyPayment={monthlyPayment}
            isValid={isValid}
          />
        </ResultsSection>
      </CalculatorLayout>
    </CalculatorContainer>
  );
};

export default Calculator;