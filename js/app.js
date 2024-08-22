const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

let firstNumber = '';
let secondNumber = ''; 
let operator = null;

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        let number = button.getAttribute('data-number');
        if (operator === null) {
            firstNumber += number;
            display.value = firstNumber;
        } else {
            secondNumber += number;
            display.value = secondNumber;
        }
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (firstNumber === '') return;
        operator = button.getAttribute('data-operator');
    });
});

equalsButton.addEventListener('click', () => {
    if (firstNumber === '' || secondNumber === '' || operator === null) return;

    let result;
    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);

    switch (operator) {
        case '+':
            result = num1 + num2;
                break;
                    case '-':
                        result = num1 - num2;
                            break;
                                case '*':
                                    result = num1 * num2;
                                        break;
                                            case '/':
                                                result = num2 !== 0 ? num1 / num2 : 'Error';
                                                    break;
    }

    display.value = result;
    firstNumber = result.toString();
    secondNumber = '';
    operator = null;
});

clearButton.addEventListener('click', () => {
    firstNumber = '';
    secondNumber = '';
    operator = null;
    display.value = '';
});