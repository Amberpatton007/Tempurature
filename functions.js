console.log("Functions.js file");

let name = "Michael";
let lastName = "Scott";

console.log("Hello " + name + " " + lastName);

//template strings ${}
console.log(`Hello ${name} ${lastName}`);   

//Function declaration
function sayHello(){
    console.log("Hello Cohort 58");
}

// Call the function
sayHello();

// Example 2 with 1 parameter
function greet(firstName){
    console.log(`Hello ${firstName}, welcome!`)
}

greet("Amber");
greet("Wilbert");

// Example 3 with 2 parameters
function greetTwoStudents(name1, name2){
    console.log(`Hello ${name1} and ${name2}, welcome to your JS course!`);
}

greetTwoStudents("Brad", "Alexis");
greetTwoStudents("Ryan", "Chris");

// Prompt allows us to take values from the user

//let user = prompt("What is your name?");
//console.log(user);

function sayMyName(){
    let name2 = prompt("What is your first name?");
    let age = prompt("What is your age?");

    console.log(`Your name is ${name2} and you are ${age}-years-old`);
}

sayMyName();

// Example number 4, calculator
function add(num1, num2){
    console.log(`The addition between ${num1} and ${num2} = ${num1+num2}`);
}

add(10, 2);