// Hàm tính số tiền vay (Loan Amount)
export const calculateLoanAmount = (purchasePrice, downPayment) => {
    return purchasePrice - downPayment;
  };
  
  // Hàm tính số tiền trả hàng tháng (Monthly Payment)

  export const calculateMonthlyPayment = (loanAmount, interestRate, years) => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = years * 12;
  
    if (principal <= 0 || monthlyRate <= 0 || numberOfPayments <= 0) {
      return 0;
    }
  
    const monthlyPayment = principal * 
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  
    return monthlyPayment;
  };
  

  export const formatCurrency = (amount, decimalPlaces = 0) => {
    return new Intl.NumberFormat('vi-VN', {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces
    }).format(amount);
  };