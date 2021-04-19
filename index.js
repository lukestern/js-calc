const readline = require("readline-sync");
const doArithmeticCalculation = require("./arithmetic_calculator.js");
const doVowelCountCalculation = require("./vowel_calculator.js");

const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';

var numOfOperations = 0;

function printWelcomeMessage() {
    if (numOfOperations === 0) {
    console.log('\nWelcome to the Calculator!');
    }
}

function getCalculationMode() {
    console.log('\nPlease select the calculator mode:\n1) Arithmetic\n2) Vowel Counting')
    const mode = Number(readline.prompt());
    if (mode == '1' || mode == '2') {
        return mode
    } else {
        console.log('Invalid Calculation mode chosen.')
        return null
    }

}

// Run calculator.
while (numOfOperations >= 0) {
    printWelcomeMessage()
    var mode = getCalculationMode()
    if (mode == '1') {
        console.log('Arithmetic mode selected')
        doArithmeticCalculation()
    } else if ( mode == '2') {
        console.log('Vowel Counting mode selected')
        doVowelCountCalculation()
    }
    numOfOperations += 1
}