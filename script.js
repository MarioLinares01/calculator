const display = document.querySelector('.display')
const clear = document.querySelector('.clear');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const sign = document.querySelector('.sign');

let num1 = '';
let num2 = '';
let op1 = '';
let op2 = '';
let result = '';
let displayValue = display.textContent;

// Additon function
const add = function (a, b) {
    return a + b;
};

// Subraction function
const subtract = function (a, b) {
    return a - b;
};

// Multiplication function
const multiply = function (a, b) {
    return a * b;
};

// Division function
const divide = function (a, b) {
    return a / b;
};

const modulo = function (a, b) {
    return a % b;
}

// Display the results
const updateDisplay = function (result) {
    display.textContent = result
};

// Clear the display
const clearDisplay = function () {
    num1 = '';
    num2 = '';
    op1 = '';
    op2 = '';
    result = '';
    displayValue = '0';
    updateDisplay(displayValue);
}

// Handle math operations
const operate = function(num1, num2, operator) {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        return divide(num1, num2);
    } else if (operator === '%') {
        return modulo(num1, num2)
    }
}

// Append number to the display
const appendNumber = function (num) {
    if (num1 === '') {
        if (displayValue === '0' || displayValue === 0) {
            displayValue = num;
        } else if (displayValue === num1) {
            displayValue = num;
        } else {
            if (displayValue.length < 9) {
                displayValue += num
            }
        }
    } else {
        if (displayValue === num1) {
            displayValue = num
        } else {
            if (displayValue.length < 9) {
                displayValue += num
            }
        }
    }
    updateDisplay(displayValue);
}

// Handle the operators
const handleOperator = function (op) {
    if (op1 != '' && op2 === '') {
        op2 = op;
        num2 = displayValue;
        result = operate(Number(num1), Number(num2), op1);
        displayValue = result
        num1 = displayValue
        updateDisplay(result)
        result = '';
    } else if (op1 != '' && op2 != '') {
        num2 = displayValue;
        result = operate(Number(num1), Number(num2), op2);
        op2 = op;
        displayValue = result
        num1 = displayValue;
        result = ''
        updateDisplay(displayValue);
    } else {
        op1 = op;
        num1 = displayValue;
    }
}

// Event listeners
numbers.forEach(btn => btn.addEventListener('click', (e) => {
    appendNumber(e.target.textContent);
}));

operators.forEach(btn => btn.addEventListener('click', (e) => {
    handleOperator(e.target.textContent);
}));

clear.addEventListener('click', () => {
    clearDisplay();
});

sign.addEventListener('click', () => {
    if (displayValue === '0' || displayValue === 0) {
        return;
    } else {
        displayValue = Number(displayValue) * -1;
        updateDisplay(displayValue);
    }
});

equal.addEventListener('click', () => {
    if (op1 === '') {
        return;
    } else if (op2 != '') {
        num2 = displayValue;
        result = operate(Number(num1), Number(num2), op2)
        displayValue = result;
        updateDisplay(displayValue);
        num1 = displayValue;
        num2 = '';
        op1 = '';
        op2 = '';
        result = '';
    } else {
        num2 = displayValue;
        result = operate(Number(num1), Number(num2), op1);
        displayValue = result;
        updateDisplay(displayValue);
        um1 = displayValue;
        num2 = '';
        op1 = '';
        op2 = '';
        result = '';
    }
});