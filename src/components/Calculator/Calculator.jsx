// Calculator.jsx
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
  const [purchasePrice, setPurchasePrice] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [repaymentYears, setRepaymentYears] = useState(15);
  const [repaymentMonths, setRepaymentMonths] = useState(0);
  const [interestRate, setInterestRate] = useState(8);
  const [loanAmount, setLoanAmount] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [isPurchasePriceFocused, setIsPurchasePriceFocused] = useState(false);
  const [isDownPaymentFocused, setIsDownPaymentFocused] = useState(false);

  useEffect(() => {
    const purchasePriceNum = parseFloat(purchasePrice) || 0;
    const downPaymentNum = parseFloat(downPayment) || 0;
    const totalRepaymentMonths = (repaymentYears * 12) + repaymentMonths;

    // Điều kiện 1: Nếu "Trả trước" có giá trị nhưng "Giá mua" rỗng
    if (purchasePriceNum === 0 && downPaymentNum > 0) {
      setIsValid(false);
      setErrorMessage('Bạn chưa nhập giá mua để tính toán');
      setLoanAmount(null);
      setMonthlyPayment(null);
      return;
    }

    // Điều kiện 2: Nếu "Trả trước" lớn hơn "Giá mua"
    if (downPaymentNum > purchasePriceNum && purchasePriceNum !== 0) {
      setIsValid(false);
      setErrorMessage('Số tiền trả trước không được lớn hơn giá mua');
      setLoanAmount(null);
      setMonthlyPayment(null);
      return;
    }
    
    setIsValid(true);
    setErrorMessage('');
    
    const calculatedLoanAmount = calculateLoanAmount(purchasePriceNum, downPaymentNum);
    setLoanAmount(calculatedLoanAmount);

    // Điều kiện 3: Nếu cả "Giá mua" và "Trả trước" có giá trị, nhưng "Thời gian hoàn trả" = 0
    if (purchasePriceNum > 0 && downPaymentNum >= 0 && totalRepaymentMonths === 0) {
      setMonthlyPayment(null); // Đặt monthlyPayment thành null để hiển thị "—"
    } else {
      const calculatedMonthlyPayment = calculateMonthlyPayment(
        calculatedLoanAmount,
        interestRate,
        totalRepaymentMonths
      );
      setMonthlyPayment(calculatedMonthlyPayment);
    }
  }, [purchasePrice, downPayment, repaymentYears, repaymentMonths, interestRate]);

  const handlePurchasePriceChange = (e) => {
    let value = e.target.value.replace(/[^0-9.]/g, '');
    const digitsOnly = value.replace('.', '');
    if (digitsOnly.length > 17) {
      value = value.slice(0, value.indexOf('.') >= 0 ? 18 : 17);
    }
    const parts = value.split('.');
    if (parts.length > 2) value = `${parts[0]}.${parts[1]}`;
    if (parts[1] && parts[1].length > 2) value = `${parts[0]}.${parts[1].slice(0, 2)}`;
    setPurchasePrice(value);
  };

  const handlePurchasePriceBlur = () => {
    if (!purchasePrice) {
      setIsPurchasePriceFocused(false);
      return;
    }
    const num = parseFloat(purchasePrice);
    if (isNaN(num)) {
      setPurchasePrice('');
    } else {
      setPurchasePrice(num.toFixed(2));
    }
    setIsPurchasePriceFocused(false);
  };

  const handlePurchasePriceFocus = () => {
    setIsPurchasePriceFocused(true);
  };
  
  const handleDownPaymentChange = (e) => {
    let value = e.target.value.replace(/[^0-9.]/g, '');
    const digitsOnly = value.replace('.', '');
    if (digitsOnly.length > 17) {
      value = value.slice(0, value.indexOf('.') >= 0 ? 18 : 17);
    }
    const parts = value.split('.');
    if (parts.length > 2) value = `${parts[0]}.${parts[1]}`;
    if (parts[1] && parts[1].length > 2) value = `${parts[0]}.${parts[1].slice(0, 2)}`;
    setDownPayment(value);
  };

  const handleDownPaymentBlur = () => {
    if (!downPayment) {
      setIsDownPaymentFocused(false);
      return;
    }
    const num = parseFloat(downPayment);
    if (isNaN(num)) {
      setDownPayment('');
    } else {
      setDownPayment(num.toFixed(2));
    }
    setIsDownPaymentFocused(false);
  };

  const handleDownPaymentFocus = () => {
    setIsDownPaymentFocused(true);
  };
  
  const handleRepaymentYearsChange = (e) => {
    setRepaymentYears(Number(e.target.value));
  };

  const handleRepaymentMonthsChange = (e) => {
    setRepaymentMonths(Number(e.target.value));
  };

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
            value={
              purchasePrice === ''
                ? ''
                : isPurchasePriceFocused
                ? purchasePrice
                : `$${formatCurrency(parseFloat(purchasePrice), 2)}`
            }
            onChange={handlePurchasePriceChange}
            onBlur={handlePurchasePriceBlur}
            onFocus={handlePurchasePriceFocus}
            note="Nhập giá mua"
          />
          <InputField
            label="Trả trước"
            value={
              downPayment === ''
                ? ''
                : isDownPaymentFocused
                ? downPayment
                : `$${formatCurrency(parseFloat(downPayment), 2)}`
            }
            onChange={handleDownPaymentChange}
            onBlur={handleDownPaymentBlur}
            onFocus={handleDownPaymentFocus}
            note="Số tiền bạn sẽ trả trước"
            error={!isValid}
          />
          {!isValid && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <Slider
            label="Thời gian hoàn trả (năm)"
            min={0}
            max={35}
            value={repaymentYears}
            onChange={handleRepaymentYearsChange}
            type="years"
          />
          <Slider
            label="Thời gian hoàn trả (tháng)"
            min={0}
            max={11}
            value={repaymentMonths}
            onChange={handleRepaymentMonthsChange}
            type="months"
          />
          <Slider
            label="Lãi suất %"
            min={0}
            max={20}
            value={interestRate}
            onChange={handleInterestRateChange}
            type="percentage"
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