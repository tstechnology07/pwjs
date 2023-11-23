// Problem Statement 1:

// Explanation of the Ternary Operator:
// The ternary operator, also known as the conditional operator, is a shorthand way of writing an if-else statement. It has the following syntax:


// condition ? expression1 : expression2;


// If the condition is true, expression1 is executed; otherwise, expression2 is executed.

// Program to Check Even or Odd:


// Program to check whether a number is even or odd using the ternary operator

let number = 7;
let result = (number % 2 === 0) ? "Even" : "Odd";

console.log(`The number ${number} is ${result}.`);
// In this example, if the number is divisible by 2 (even), it assigns "Even" to the result variable; otherwise, it assigns "Odd."

// Problem Statement 2:

// Usage of the Comma Operator:
// The comma operator allows you to evaluate multiple expressions in a single statement, with each expression separated by a comma. It evaluates each expression from left to right and returns the value of the rightmost expression.

// Example:
// Using the comma operator to declare and assign multiple variables in a single statement

let x = 5, y = 10, z = 15;

console.log(x); // 5
console.log(y); // 10
console.log(z); // 15
// In this example, the comma operator is used to declare and assign values to multiple variables in a single line.

// Problem Statement 3:

// Nested Ternary Operator to Check Positive, Negative, or Zero:

// Using a nested ternary operator to check if a number is positive, negative, or zero

let num = -8;
let resultMessage =
  num > 0 ? "positive"
  : num < 0 ? "negative"
  : "zero";

console.log(`The number ${num} is ${resultMessage}.`);
// In this example, the nested ternary operator checks whether the number is positive, negative, or zero and assigns the appropriate message to the resultMessage variable.

// Problem Statement 4:

// Ternary Operator to Check Eligibility to Vote:

// Using a ternary operator to check if a person is eligible to vote

let age = 20;
let eligibilityMessage = (age < 18) ? "You cannot vote" : "You can vote";

console.log(eligibilityMessage);