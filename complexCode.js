/* 
 * Filename: complexCode.js
 * Content: Complex JavaScript Code Example
 */

// Declare variables
let num1 = 10;
let num2 = 20;
let result;

// Function to calculate the sum of two numbers
function sum(a, b) {
  return a + b;
}

// Function to calculate the difference between two numbers
function diff(a, b) {
  return a - b;
}

// Function to calculate the product of two numbers
function multiply(a, b) {
  return a * b;
}

// Function to calculate the division of two numbers
function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Cannot divide by zero";
  }
}

// Perform calculations
result = sum(num1, num2);
console.log("Sum:", result);

result = diff(num1, num2);
console.log("Difference:", result);

result = multiply(num1, num2);
console.log("Product:", result);

result = divide(num1, num2);
console.log("Division:", result);

// Object to represent a complex number
class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  // Get the magnitude of the complex number
  getMagnitude() {
    return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
  }

  // Get the conjugate of the complex number
  getConjugate() {
    return new ComplexNumber(this.real, -this.imaginary);
  }

  // Add two complex numbers
  add(complexNum) {
    return new ComplexNumber(
      this.real + complexNum.real,
      this.imaginary + complexNum.imaginary
    );
  }
}

// Create complex numbers and perform operations
const complexNum1 = new ComplexNumber(3, 2);
const complexNum2 = new ComplexNumber(1, -4);

result = complexNum1.getMagnitude();
console.log("Magnitude of complexNum1:", result);

result = complexNum1.getConjugate();
console.log("Conjugate of complexNum1:", result);

result = complexNum1.add(complexNum2);
console.log("Sum of complexNum1 and complexNum2:", result);

// Define an array of objects representing people
const people = [
  {
    name: "John",
    age: 25,
    city: "New York"
  },
  {
    name: "Jane",
    age: 30,
    city: "Los Angeles"
  },
  {
    name: "Mike",
    age: 35,
    city: "Chicago"
  }
];

// Iterate over the array of people and log their information
people.forEach((person) => {
  console.log(`Name: ${person.name}, Age: ${person.age}, City: ${person.city}`);
});

// Perform some async operations using Promises
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

function asyncOperation() {
  return wait(2000)
    .then(() => {
      console.log("Async operation completed.");
      return "Result";
    })
    .catch((error) => {
      console.error("Async operation failed:", error);
    });
}

async function performAsyncOperations() {
  console.log("Starting async operations...");

  try {
    const result = await asyncOperation();
    console.log("Async operation result:", result);
  } catch (error) {
    console.error("Failed to perform async operations:", error);
  }
}

performAsyncOperations();

// ... continue with more complex code