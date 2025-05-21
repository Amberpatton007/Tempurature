console.log("Temperature Conversion");

function convertTemperature(){
    let scale = prompt("C to convert Celsius to Fahrenheit or F to convert Fahrenheit to Celsius");
    let C = ((Fahrenheit - 32) * 5/9);

    if(scale == "C"){
        (Fahrenheit - 32) * 5/9
    } else {
        (Celsius * 9/5) + 32
    };

    document.getElementById("result").innerHTML=`The conversion of Celsius ${temp} to Farhenheit is ${fahrenheit}`;
}



/* if(condition){ //code to be executed if condition is true
}else { 
    //code to be executed if condition is false}
    = equal to
    > greater than
    < less than*/