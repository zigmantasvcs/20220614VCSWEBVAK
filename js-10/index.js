// // local storage - naršyklės atmintis
// let localStorage = window.localStorage;

// // padeti i atminti reiksme
// localStorage.setItem("name", "Zigmantas");

let localStorage = window.localStorage;

// pasiimti ir atvaizduoti
let name = localStorage.getItem("name");

document.querySelector("h1").innerHTML = name;

document.querySelector("button").onclick = function(){
    let value = document.querySelector("input").value;
    localStorage.setItem("name", value);
}