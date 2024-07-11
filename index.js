// Calculations
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;
const mul = (a, b) => a * b;

// References
const button = document.querySelector('button');

// Variables
let number1, number2, operation;

// Initiate calculator when button is pressed and assigns values to variables
button.addEventListener('click', function() {
    number1 = parseFloat(prompt("Enter the first number:"));
    number2 = parseFloat(prompt("Enter the second number:"));
    operation = prompt("Choose your operation: +  -  /  *");

    calculate();
})

// Perform Calculation
const calculate = () => {

    if (isNaN(number1) || isNaN(number2)) {
        alert('You did not enter real numbers. Try again.');
        return;
    }

    if (operation === "+"){
        alert(add(number1, number2));
    } else if (operation === "-") {
        alert(sub(number1, number2))
    } else if (operation === "/"){
        alert(div(number1, number2))
    } else if (operation === "*"){
        alert(mul(number1, number2))
    } else {
        alert("You entered an incorrect operation. Try again.")
    }
}