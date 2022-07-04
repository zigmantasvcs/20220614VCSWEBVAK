// anoniminės 

document.querySelector("button").onclick = function(){
    alert("OK");
}

// void funkcijos, kurios atlieka veiksmą, nieko negrąžina

addNumbers(10, 5); // paduodam bet kokius skaičius
addNumbersToElement(44, 66, document.querySelector("h2"));
addNumbersToElement(1000, 959529, document.querySelector("div"))

function addNumbers(number1, number2){
    let sum = number1 + number2;
    console.log(sum);
    document.querySelector("h2").innerHTML = sum;
}

function addNumbersToElement(number1, number2, element){
    let sum = number1 + number2;
    console.log(sum);
    element.innerHTML = sum;
}

// return funkcijos. Grąžina rezultatą
let sum = addNumbers2(11, 6);
console.log(sum);
console.log(addNumbers2(20, 30));

function addNumbers2(number1, number2){
    let sum = number1 + number2;
    return sum;
}