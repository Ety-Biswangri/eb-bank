function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValueInText = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueInText);
    inputField.value = '';
    return inputFieldValue;
}

function getInnerTextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInText = fieldTag.innerText;
    const fieldValue = parseFloat(fieldValueInText);
    return fieldValue;
}

function updateTotal(fieldId, amount) {
    // const totalField = document.getElementById(fieldId);
    // const previousTotalInText = totalField.innerText;
    // const previousTotal = parseFloat(previousTotalInText);
    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
    return newTotal;
}

function updateBalance(amount, isAdding) {
    // const balanceField = document.getElementById('balance-total');
    // const balanceInText = balanceField.innerText;
    // const previousBalance = parseFloat(balanceInText);
    const previousBalance = getInnerTextValue('balance-total');
    let newBalance;
    if (isAdding == true) {
        newBalance = previousBalance + amount;
    }
    else {
        newBalance = previousBalance - amount;
    }
    document.getElementById('balance-total').innerText = newBalance;
}

document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    if (amount > 0) {
        updateTotal('deposit-total', amount);
        updateBalance(amount, true);
    }
})

// handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');
    if (amount > 0 && amount <= balance) {
        updateTotal('withdraw-total', amount);
        updateBalance(amount, false);
    }
})