export const calculateLoanAmount = (purchasePrice, downPayment) => {
  return purchasePrice - downPayment;
};
export const calculateMonthlyPayment = (loanAmount, interestRate, months) => {
  const principal = loanAmount;

  if (interestRate === 0) {
    return months > 0 ? principal / months : 0;
  }

  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = months;

  if (principal <= 0 || numberOfPayments <= 0) {
    return 0;
  }

  const monthlyPayment = principal * 
    (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  // Làm tròn kết quả cuối cùng đến 2 chữ số thập phân
  return Math.round(monthlyPayment * 100) / 100;
};

export const formatCurrency = (amount, decimalPlaces = 0) => {
  return new Intl.NumberFormat('vi-VN', {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces
  }).format(amount);
};
