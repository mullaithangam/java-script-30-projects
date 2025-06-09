function calculateLoan(){
    loanAmountValue = document.getElementById("loan-amount").value ;

    interestRateValue=document.getElementById("interest-rate").value;

    MonthsTopayValue=document.getElementById("months-to-pay").value;

    interest = (loanAmountValue * (interestRateValue * 0.01))/MonthsTopayValue;

    monthlyPayment = (loanAmountValue / MonthsTopayValue + interest).toFixed(2);

    document.getElementById("payment").innerHTML = `Monthly payment: ${monthlyPayment}`

}