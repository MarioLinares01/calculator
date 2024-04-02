const display = document.querySelector('.display')
const clear = document.querySelector('.clear');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');

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

// Function to display the result
const updateDisplay = function (result) {
    display.textContent = result
};

// Clear Display
const clearDisplay = function () {
    display.textContent = '';
}

const operate = function(num1, num2, operator) {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        return divide(num1, num2);
    }
}

const appendNumber = function (num) {
    if (num1 === '') {
        // Handles first number input
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

// Event listeners
numbers.forEach(btn => btn.addEventListener('click', (e) => {
    // inputNumber(e.target.textContent)
    appendNumber(e.target.textContent);
}));

operators.forEach(btn => btn.addEventListener('click', (e) => {
    console.log(e.target.textContent);
}));

clear.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    displayValue = '0';
    result = '';
    updateDisplay(displayValue);
});
