console.log("Hello world CH#58");

//this is a comment in javascript

console.log("Hello, my name is Amber and I'm 38 years old")

// STRING VARIABLES

let name = "Peter";
let lastName = "Parker";

console.log(name);
console.log(lastName);
console.log("Hello my name is " + name + " " + lastName)

//variable is like a box you name and the value inside the box(that is now labeled whatever you want it to be) is called Peter
//keyword (let) variableName = value; These are important aspects/ The quotations are the string value
//camelCase is the wording used in JS
// string is letters
//numerical variables do not require quotations


// creating nuumerical variables

let age = 40;
console.log(40);

let grade = 9.0;
console.log(grade);



console.log("Hello my name is " + name + " " + lastName + " " + age);

console.log("I am " + age + " years old");

//BOOLEAN VARIABLES(true / false)

let isAProfessor = true;

let isAStudent = false;

let isAdmin = true;

console.log(isAProfessor);
console.log(isAStudent);


/*many
lines of
comments
End of comments*/

//Math of Operations
//Addition//
let number1 = 8.3;
let number2 = 4;
let addition = number1 + number2;

console.log(addition);
console.log(number1 + " + " + number2 + " = " + (number1+number2));

//subtraction
let subtraction = number1 - number2;
console.log(number1 + " - " + number2 + " = " + subtraction.toFixed(3));

//multiplication
let multiplication = number1 * number2;
console.log(number1 + " * " + number2 + " = " + multiplication.toFixed(3));

//division
let division = number1 / number2;
console.log(number1 + " / " + number2 + " = " + division.toFixed(2));

//.toFixed allows you to only show a certain amount of numbers after a decimal point
//LET is a valuable that can change however CONST is always the same value

//VAR is old school. LET is what you need to use. Or CONST

//changing variable value
number1 = 10;
number2 = 20;

addition = number1 + number2;

console.log(addition);
console.log(number1 + " + " + number2 + " = " + (number1+number2));

//CONSTANT VARIABLES
//Use uppercase when using const

const PI = 3.1416;
const MYNAME = "Amber";

console.log(PI);
console.log(MYNAME);