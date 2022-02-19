function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValueInText = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueInText);
    inputField.value = '';
    return inputFieldValue;
}

function updateTotal(fieldId, amount) {
    const totalField = document.getElementById(fieldId);
    const previousTotalInText = totalField.innerText;
    const previousTotal = parseFloat(previousTotalInText);
    const newTotal = previousTotal + amount;
    totalField.innerText = newTotal;
}

function updateBalance(amount, isAdding) {
    const balanceField = document.getElementById('balance-total');
    const balanceInText = balanceField.innerText;
    const previousBalance = parseFloat(balanceInText);
    let newBalance;
    if (isAdding == true) {
        newBalance = previousBalance + amount;
    }
    else {
        newBalance = previousBalance - amount;
    }
    balanceField.innerText = newBalance;
}

document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    updateTotal('deposit-total', amount);
    updateBalance(amount, true);
})

// handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    updateTotal('withdraw-total', amount);
    updateBalance(amount, false);
})