// ResultCard.jsx
import React from 'react';
import {
  CardContainer,
  CardSection,
  LoanAmount,
  AmountLabel,
  Amount,
  AmountNote,
  MonthlyPayment,
  CTASection,
  CTAPrompt,
  CTAText,
  CTAButton,
  InvalidAmount
} from './ResultCard.styles';
import { formatCurrency } from '../../utils/calculator';

const ResultCard = ({ loanAmount, monthlyPayment, isValid }) => {
  return (
    <CardContainer>
      <CardSection>
        <LoanAmount>
          <AmountLabel>Số tiền vay</AmountLabel>
          {isValid ? (
            <Amount>${formatCurrency(loanAmount, 2)}</Amount>
          ) : (
            <InvalidAmount>—</InvalidAmount>
          )}
          <AmountNote>Số tiền bạn vay</AmountNote>
        </LoanAmount>
      </CardSection>

      <CardSection>
        <MonthlyPayment>
          <AmountLabel>Số tiền phải trả</AmountLabel>
          {isValid ? (
            monthlyPayment !== null ? (
              <Amount>${formatCurrency(monthlyPayment, 2)}</Amount>
            ) : (
              <InvalidAmount>—</InvalidAmount>
            )
          ) : (
            <InvalidAmount>—</InvalidAmount>
          )}
          <AmountNote>Số tiền bạn phải trả hàng tháng</AmountNote>
        </MonthlyPayment>
      </CardSection>

      <CTASection>
        <CTAPrompt>Sẵn sàng mua trả góp?</CTAPrompt>
        <CTAText>Mua thì mua</CTAText>
        <CTAButton>Nhận báo giá</CTAButton>
      </CTASection>
    </CardContainer>
  );
};

export default ResultCard;