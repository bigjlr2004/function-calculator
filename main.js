/*
It can add numbers
It can subtract numbers
It can divide numbers
It can multiply numbers
It can square numbers
*/

// this function receives two numbers, number1 and number2 and adds them together to be returned to the result variable
const addNumbers = (number1, number2) => {
    const result = number1 + number2;
    return result;
};


// this function receives two numbers, number1 and number2 and subtracts number1 from number2 
// and returns that value to the result variable
const subtractNumbers = (number1, number2) => {
    const result = number1 - number2;
    return result;
};

// this function receives two numbers, number1 and number2 and divides number1 by number2 
// and returns that value to the result variable
const divideNumbers = (number1, number2) => {
    const result = number1 / number2;
    return result;
};

// this function receives two numbers, number1 and number2 and multiplies number1 by number2 
// and returns that value to the result variable
const multiplyNumbers = (number1, number2) => {
    const result = number1 * number2;
    return result;
};

// // this function receives one number and then squares that number and stores it in the result variable to be returned
const squareNumbers = (number1) => {
    const result =Math.pow(number1, 2);
    return result;
};

//A quarter of the animals on a farm have four legs. 
//The remaining three quarters of the animals have two legs. 
//If there are 60 legs overall, how many animals are there on the farm?

/*
60 legs overall. 
1/4 have 4 legs. x
3/4 have 2 legs. y 
divide 60 by 3/4 to get the number legs of animals with 2 legs
divide 60 by 1/4 to get the legs for animals that have 4 legs.
*/

const x = 60;
const y = 2.5;

const addResult = addNumbers(x, y);
console.log(`Addition: ${addResult}`);
const subResult = subtractNumbers(x, y);
console.log(`Subtraction: ${subResult}`);
const divResult =divideNumbers(x,y);
console.log(`Division: ${divResult}`);
const multiplyResult = multiplyNumbers(x,y);
console.log(`Multiplication: ${multiplyResult}`);
const squareResult = squareNumbers(x);
console.log(`Squared: ${squareResult}`);  

const farmAnimals = divideNumbers(60,2.5)
