const addNumbers = function(a, b) {
    return a + b;
};

const subtractNumbers = function(a, b) {
    return a - b;
};

const multiplyNumbers = function(a, b) {
    return a * b;
};

const divideNumbers = function(a, b) {
    if (b != 0) {
        return a / b  
    } else {
        return "no fk u"
    };        
};

const operate = function(operator, num1, num2) {
    switch (operator) {
        case "+":
            return addNumbers(num1, num2);
            break;
        case "-":
            return subtractNumbers(num1, num2);
            break;
        case "*":
            return multiplyNumbers(num1, num2);
            break;
        case "/":
            return divideNumbers(num1, num2);
            break;
    }
};

let displayNumber = "";

const numbers = document.querySelectorAll('#numbers');
const display = document.querySelector('#display');
const storage = document.querySelector('#storage');
const operators = document.querySelectorAll('#operators');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear')
const allButtons = document.querySelectorAll('button');

numbers.forEach((button) => {
    button.addEventListener('click', function (e) {
        displayNumber += button.className;
        console.log(displayNumber);
        display.textContent = displayNumber;
    });
});

let firstNumber;
let secondNumber;
let operator;

operators.forEach((button) => {
    button.addEventListener('click', function (e) {
        if (displayNumber.length > 0 && typeof firstNumber != 'string') {
            firstNumber = displayNumber;
            displayNumber = "";
            storage.textContent = firstNumber;
            display.textContent = displayNumber;
        } else if (typeof firstNumber == 'string') {
            secondNumber = displayNumber;
            if (firstNumber.length > 0 && secondNumber.length > 0) {
                displayNumber = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber)).toString();
                if (displayNumber == "no fk u") {
                    allButtons.forEach((button) => {
                        button.disabled = true;
                        storage.textContent = "yea fk u";
                    });
                };
                storage.textContent = displayNumber;
                firstNumber = displayNumber;
                displayNumber = "";
                display.textContent = displayNumber;
                secondNumber = undefined;
            };
        };
        operator = button.className;
    });
});

equals.addEventListener('click', function (e) {
    secondNumber = displayNumber;
    if (firstNumber.length > 0 && secondNumber.length > 0) {
        displayNumber = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber)).toString();
        if (displayNumber == "no fk u") {
            allButtons.forEach((button) => {
                button.disabled = true;
                storage.textContent = "yea fk u";
            });
        };
        display.textContent = displayNumber;
        firstNumber = undefined;
        secondNumber = undefined;
    };
});

clear.addEventListener('click', function (e) {
    firstNumber = "";
    secondNumber = "";
    displayNumber = "";
    storage.textContent = firstNumber;
    display.textContent = displayNumber;
});


// FEATURES TO ADD
// allow negative number input from the start
// add decimal button
// backspace button
// keyboard support
// add some css i guess