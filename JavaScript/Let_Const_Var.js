// Let Keyword : we change the assign value in runTime
console.log("Let Keyword")
let val1 = 5;
let val2 = 10;
let sum = val1 + val2;
console.log(sum);

val1 = 10;
console.log(val1+val2);

// Const Keyword: we change the value in compile time
console.log("Const Keyword")
const num1 = 10;
const num2 = 15;
const result = num1 + num2;
console.log(result);
// num2 = 20;  //we can't reassing the variable
// console.log(num1 + num2);

// Var Keyword: it oldest keyword in JavaScript
console.log("Var Keyword")

var res = 5;
console.log(res);
res = 10;
console.log(res);