const readline = require("readline-sync");


console.log('Welcome to the Calculator!');

console.log('Please enter an operator (+, -, * or /):');
const operation = readline.prompt();

console.log(`How many numbers do you want to ${operation}?`)
const repetitions = Number(readline.prompt());

const inputs = [];
for (var i = 0; i < repetitions; i++) {
    console.log(`Please enter number ${i+1}:`);
    inputs[i] = Number(readline.prompt());
}

switch (operation)  {
    case '+':
        var result = inputs.reduce((a, b) => a + b);
        break;
    case '-':
        var result = inputs.reduce((a, b) => a - b);
        break;
    case '*':
        var result = inputs.reduce((a, b) => a * b);
        break;
    case '/':
        var result = inputs.reduce((a, b) => a / b);
        break;
}

console.log('Reuslt: ' + result)
