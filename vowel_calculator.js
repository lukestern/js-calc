const readline = require("readline-sync");

function getInput() {
    console.log('Please enter a string:')
    input = readline.prompt();
    if (input) { 
        return input
     } else { 
        console.log('Invalid string input.')
        return null
      }
}

function calculate(inputString) {
    inputString = inputString.toLowerCase()
    result = {
        A: (inputString.match(/a/g) || []).length,
        E: (inputString.match(/e/g) || []).length,
        I: (inputString.match(/i/g) || []).length,
        O: (inputString.match(/o/g) || []).length,
        U: (inputString.match(/u/g) || []).length,
    }
    return result
}

function printResult(result_object) {
    console.log(`\nThe vowel counts are:`);
    for (key in result_object) {
        console.log(`${key}: ${result_object[key]}`)
    }
}

function doOneCalculation() {
    inputString = getInput()
    if (inputString) { 
        result = calculate(inputString)
        printResult(result)
    }
}

module.exports = doOneCalculation
