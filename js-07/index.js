// masyvai
let shoppingCart = ["Duona", "Kumpis", "Kiaušiniai", "Dešra"]; // array - masyvas
// document.write(shoppingCart[2]);
// document.write(shoppingCart[1]);
// document.write(shoppingCart[0]);

console.log(shoppingCart.length);

for (let index = 0; index < shoppingCart.length; index++) {
    const element = shoppingCart[index];
    document.write(element);
}

// kitas ciklas forof
for (const iterator of shoppingCart) {
    console.log(iterator);
}

let prices = [1, 2, 2, 2];

for (let index = 0; index < shoppingCart.length; index++) {
    const item = shoppingCart[index];
    const price = prices[index];
    
    console.log("Prekė: " + item + " - " + price + " EUR");

    document.querySelector("ol").innerHTML += `<li>Prekė: ${item} - ${price} EUR</li>`;
    // += prie seno pridedu nauja arba papildau
    
}

let tekstas = 'Kazkoks tekstas su "kabutemis" papildomomis';

