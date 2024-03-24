document.addEventListener('DOMContentLoaded', (event) => {
    console.log("Hello from the script")
});


const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    return a / b;
};

// Function to display the result
const display = function (result) {
    let display = document.querySelector('.display');
    display.textContent = result
};
