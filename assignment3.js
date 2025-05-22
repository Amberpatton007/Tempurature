console.log("Temperature Conversion");

function convertTemperature(){
    let scale = prompt("C to convert Celsius to Fahrenheit or F to convert Fahrenheit to Celsius");
    let C = ((Fahrenheit - 32) * 5/9);
    let F = ((Celsius * 9/5) + 32);

    if(scale == "C"){
        (Fahrenheit - 32) * 5/9
    } else {
        (Celsius * 9/5) + 32
    };

    concole.log(`The conversion of Celius ${C} to Fahrenheit is ${F}`);
    concole.log(`The conversion of Fahrenheit ${F} to Celcius is ${C}`);

    document.getElementById("result").innerHTML=`The temperature ${C})`;
}



/* if(condition){ //code to be executed if condition is true
}else { 
    //code to be executed if condition is false}
    = equal to
    > greater than
    < less than*/