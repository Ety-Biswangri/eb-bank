function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValueInText = inputField.value;
    const inputValue = parseFloat(inputValueInText);
    inputField.value = '';
    return inputValue;
}

function updateTotal(fieldId, amount) {

}

document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    console.log(amount);
})