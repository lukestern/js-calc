const readline = require("readline-sync");


function getInputs() {
    inputs = [];
    inputs[0] = getOperatorInput()
    if (inputs[0]) {
        return getNumericalInputs(inputs)    
    } else {
        return null
    }
}

function getOperatorInput() {
    console.log('\nPlease enter an operator (+, -, * or /):');
    operator = readline.prompt();
    if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
        return operator
    } else {
        console.log('An invalid operator was given.')
        return null
    }
}

function getNumericalInputs(inputs) {
    console.log(`How many numbers do you want to ${inputs[0]}?`);
    const repetitions = Number(readline.prompt());
    if (valueIsNumber(repetitions)) {
        for (var i = 1; i <= repetitions; i++) {
            console.log(`Please enter number ${i}:`);
            let value = Number(readline.prompt());
            if (valueIsNumber(value)) {
                inputs.push(value);
            }
        }
    } else {
        console.log('An invalid number of repetitions was given.');
        return null;
    }
    return inputs
}

function valueIsNumber(value) {
    if (isNaN(value)) {
        console.log('A non-numerical value was given.')
        return false
    } else {
        return true;
    }
}

function calculate(inputArray) {
    switch (inputArray[0])  {
        case '+':
            var result = inputArray.slice(1).reduce((a, b) => a + b);
            break;
        case '-':
            var result = inputArray.slice(1).reduce((a, b) => a - b);
            break;
        case '*':
            var result = inputArray.slice(1).reduce((a, b) => a * b);
            break;
        case '/':
            var result = inputArray.slice(1).reduce((a, b) => a / b);
            break;
        }
    return result
}
            
function doOneCalculation() {
    inputArray = getInputs()
    if (inputArray) { 
        result = calculate(inputArray)
        console.log(`Result: ${result}`);
    }
}

module.exports = doOneCalculation