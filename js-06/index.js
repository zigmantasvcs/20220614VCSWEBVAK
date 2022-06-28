// funkcija kuri praneša
// alert("Sveikas pasauli!");

// pranešimas į konsolę
// console.log("Sveikas pasauli");

// i narsykles langa
//document.write('<h1>Sveikas pasauli</h1>');

// kintamieji (skaiciai)
let number1 = 55;
document.write(number1);

let number2 = 4.5;
console.log(number2);

let sum = number1 + number2;
document.write("<h1>" + sum + "</h1>");
document.write(sum);
document.write(`<h1>${sum+1}</h1>`); // sablonams
document.write(`<h1>${number1+number2}</h1>`); // sablonams

console.log(5+Number('5'));

//console.log(Number1); // didziosios ir mazosios raides interpretuojamos skirtingai

// tekstas
// tekstas yra kabutese
let name1 = "Jonas";
let space = " ";
let surname1 = "Jonaitis";
document.write(name1 + space + surname1);
document.write(name1.concat(space, surname1, "!"));

// indexOf
let text = "labai Šiandien karšta!";
let pos = text.indexOf("labai"); // jeigu neranda grazina -1, jeigu randa grazina pozicija
console.log(pos);

// substring
let result = text.substring(pos, pos+5); // iskerpa nuo 0 iki 5 pozicijos
console.log(result);

// split, replace, toLowerCase
text = text.toLowerCase().replace("!", "");
result = text.split(' ');
console.log(result);


// boolean
console.log(5 < 4); // false
console.log(5 > 4); // true
console.log('5' < 4); // false
console.log('5' < '4'); // false
let number3 = 10;
console.log(number3 > 11); // false

// sąlygos sakiniai if (jeigu)
let isItRainingNow = false;

if(isItRainingNow){
    console.log('Pasiimu skėtį!');
} else {
    console.log('Apsimausiu šortus');
}

// kitas if pavyzdys
let temperature = 1;//prompt('Kokia lauko temperatura?');
if(temperature <= 0) {
    console.log('Labai šalta!');
} else if (temperature > 0 && temperature <= 20){
    console.log('Normaliai!');
} else {
    console.log('Karšta!');
}

// prompt
let name2 = "Jonas";//prompt("Įveskite vardą");
let pass = "nezinau";//prompt("Įveskite slaptažodį");

if(name2 == "petras" && pass == "nezinau"){
    console.log("Prisijungėte");
} else {
    console.log("Neprisijungėte");
}


// ciklai
// while
// let number4 = 0;
// while(number4 != 5){
//     number4 = prompt('Spėk!');
// }

// do while
// do{
//     var number5 = prompt('Spėk!');
// }while(number5 != 5)

// for 1 variantas
for (let index = 0; index < 10; index++) {
   
    //console.log(index);
    console.log("Zigmantas");
    document.write("Zigmantas");
    
}
