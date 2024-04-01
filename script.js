const display = document.querySelector('.display')
const clear = document.querySelector('.clear');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');


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
