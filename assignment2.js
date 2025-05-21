console.log("Assignment 2: Temperature");


function getTemp(){
let temp = prompt("Enter Celcius");
let fahrenheit = ((temp * 9/5) + 32);

console.log(`The conversion of Celsius ${temp} to Farhenheit is ${fahrenheit}`);

document.getElementById("result").innerHTML=`The conversion of Celsius ${temp} to Farhenheit is ${fahrenheit}`;
}


/* if(condition){ //code to be executed if condition is true
}else { 
    //code to be executed if condition is false}
    = equal to
    > greater than
    < less than*/

