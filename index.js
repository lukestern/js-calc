const readline = require("readline-sync");
const doArithmeticCalculation = require("./arithmetic_calculator.js");
const doVowelCountCalculation = require("./vowel_calculator.js");

const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';

function printWelcomeMessage() {
    console.log('\nWelcome to the Calculator!');
}

function getCalculationMode() {
    console.log('\nPlease select the calculator mode:\n1) Arithmetic\n2) Vowel Counting')
    const mode = Number(readline.prompt());
    if (mode == '1' || mode == '2') {
        return mode;
    } else {
        console.log('Invalid Calculation mode chosen.');
        return null;
    }

}

// Run calculator.
printWelcomeMessage();
while (true) {
    var mode = getCalculationMode();
    if (mode == ARITHMETIC_MODE) {
        console.log('Arithmetic mode selected');
        doArithmeticCalculation();
    } else if (mode == VOWEL_COUNTING_MODE) {
        console.log('Vowel Counting mode selected');
        doVowelCountCalculation();
    }
}