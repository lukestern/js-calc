const readline = require("readline-sync");


console.log('Welcome to the Calculator!');

console.log('Please enter an operator (+, -, * or /):');
const operation = readline.prompt();

console.log('Please enter a number:');
const inputOne = Number(readline.prompt());

console.log('Please enter another number:');
const inputTwo = Number(readline.prompt());

switch (operation)  {
    case '+':
        var result = inputOne + inputTwo;
        break;
    case '-':
        var result = inputOne - inputTwo;
        break;
    case '*':
        var result = inputOne * inputTwo;
        break;
    case '/':
        var result = inputOne / inputTwo;
        break;
}

console.log('Reuslt: ' + result)
