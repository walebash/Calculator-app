// selectors
const outputDisplay = document.querySelector('.output');
const initialDisplay = document.querySelector('.display');
const inputDigit = document.querySelectorAll('.btn');
const removeDisplay = document.querySelector('.del');
const clearDisplay = document.querySelector('.ac');
const resultOutput = document.querySelector('.equal');
const operands = document.querySelectorAll('.operation');
const dot = document.querySelector('.period');

// delete function
const removeChar = () => {
    initialDisplay.innerText = initialDisplay.innerText.slice(0, -1);
};
// clear screen function
const clearScreen = () => {
    initialDisplay.innerText = "";
    outputDisplay.innerText = "";
}

// Compute the operation
const computeResult = () => {
    if (initialDisplay.innerText) {
        let result = eval(initialDisplay.innerText);
        outputDisplay.innerText = result;
    }

};


// add event listener
for (let i = 0; i < inputDigit.length; i++) {
    const digit = inputDigit[i];
    digit.addEventListener('click', function () {
        if (digit.innerText === '.' && initialDisplay.innerText.slice(-1).includes('.')) {
            initialDisplay.innerText != digit.innerText
        } else {
            initialDisplay.innerText += digit.innerText;
        }
        // initialDisplay.innerText += digit.innerText;


    })

}
// operation display and format numbers with comma
operands.forEach(operand => {
    operand.addEventListener('click', () => {
        if (!initialDisplay.innerText) {
            initialDisplay.innerText != operand.innerText;
        } else if (['*', '+', '-', '/'].includes(initialDisplay.innerText.slice(-1))) {
            initialDisplay.innerText != operand.innerText;
        }
        else {
            // console.log(digit);
            initialDisplay.innerText = initialDisplay.innerText.toString() +
                operand.innerText.toString();
        }
    })
})

clearDisplay.addEventListener('click', clearScreen);
removeDisplay.addEventListener('click', removeChar);
resultOutput.addEventListener('click', computeResult);