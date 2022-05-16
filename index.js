let meterToFeet = document.getElementById("value-mf");
let feetToMeter = document.getElementById("value-fm");
let literToGallon = document.getElementById("value-lg");
let gallonToLiter = document.getElementById("value-gl");
let kiloToPound = document.getElementById("value-kp");
let poundToKilo = document.getElementById("value-pk");

let initialVal = document.getElementById("initial-val").textContent; 

function toFeet(){
    let feet = initialVal * 3.281;
    let result = feet.toFixed(3);
    meterToFeet.textContent = initialVal + " meters = " + result + " feet"
    console.log(meterToFeet);
}

function toMeter(){
    let meter = initialVal / 3.281;
    let result = meter.toFixed(3);
    feetToMeter.textContent = initialVal + " feet = " + result + " meters"
    console.log(feetToMeter);
}

function toGallon(){
    let gallon = initialVal / 3.785;
    let result = gallon.toFixed(3);
    literToGallon.textContent = initialVal + " liters = " + result + " gallons"
    console.log(literToGallon);
}

function toLiter(){
    let liter = initialVal * 3.785;
    let result = liter.toFixed(3);
    gallonToLiter.textContent = initialVal + " gallons = " + result + " liters"
    console.log(gallonToLiter);
}

function toPound(){
    let pound = initialVal * 2.205;
    let result = pound.toFixed(3);
    kiloToPound.textContent = initialVal + " kilos = " + result + " pounds"
    console.log(kiloToPound);
}

function toKilo(){
    let kilo = initialVal / 2.205;
    let result = kilo.toFixed(3);
    poundToKilo.textContent = initialVal + " pounds = " + result + " kilos"
    console.log(poundToKilo);
}

toFeet();
toMeter();
toGallon();
toLiter();
toPound();
toKilo();
