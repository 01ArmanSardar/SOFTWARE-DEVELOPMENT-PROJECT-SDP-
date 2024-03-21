// DEPOSIT PART

function handelDeposite() {
    var inputvalue = document.getElementById("deposit-input").value;
    var ConvertedInputValue = ConvertStringToNumber(inputvalue);

    var depositAmount = document.getElementById("deposit-amount").innerText;
    var ConverteDepositeValue = ConvertStringToNumber(depositAmount);

    var sum = ConvertedInputValue + ConverteDepositeValue;
    document.getElementById("deposit-amount").innerText = sum;

    // total balance part.........................................................
    var totalAmount = document.getElementById("TotalAmount").innerText;
    var convertedTotalvalue = ConvertStringToNumber(totalAmount);
    var afterDepositeTotalAmount = ConvertedInputValue + convertedTotalvalue;
    document.getElementById("TotalAmount").innerText = afterDepositeTotalAmount;
    // ..........................................................................

    document.getElementById("deposit-input").value = "";
}

function ConvertStringToNumber(value) {
    return parseInt(value)
}

// WITHDRAW PART

function handelWithdraw() {
    var inputvalueW = document.getElementById("withdrawInput").value
    var ConvertedInputValueW = ConvertStringToNumber(inputvalueW);

    var withdrawAmount = document.getElementById("withdraw-amount").innerText
    var convertedWithdrawValue = ConvertStringToNumber(withdrawAmount);

    var sumW = ConvertedInputValueW + convertedWithdrawValue;
    document.getElementById("withdraw-amount").innerText = sumW

     // total balance part.........................................................
     var totalAmount = document.getElementById("TotalAmount").innerText;
     var convertedTotalvalue = ConvertStringToNumber(totalAmount);
     var afterWithdrawTotalAmount = convertedTotalvalue-inputvalueW;
     document.getElementById("TotalAmount").innerText = afterWithdrawTotalAmount;
     // ..........................................................................

    document.getElementById("withdrawInput").value = "";
}

 
// Code formatign Bakih ache . SOURCE: Pitron/SDP/Module-6.10 