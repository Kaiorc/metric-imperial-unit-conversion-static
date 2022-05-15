let initialVal = document.getElementById("initial-val").textContent; 
let meterToFeet = document.getElementById("value-mf");
let feetToMeter = document.getElementById("value-fm");
let literToGaloon = document.getElementById("value-lg");
let galoonToLiter = document.getElementById("value-gl");
let kiloToPound = document.getElementById("value-kp");
let poundToKilo = document.getElementById("value-pk");

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

function toGaloon(){
    let galoon = initialVal / 3.785;
    let result = galoon.toFixed(3);
    literToGaloon.textContent = initialVal + " liters = " + result + " galoons"
    console.log(literToGaloon);
}

function toLiter(){
    let liter = initialVal * 3.785;
    let result = liter.toFixed(3);
    galoonToLiter.textContent = initialVal + " galoons = " + result + " liters"
    console.log(galoonToLiter);
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
toGaloon();
toLiter();
toPound();
toKilo();