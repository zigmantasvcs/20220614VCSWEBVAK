let d = new Date();
console.log(d.getFullYear());
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMonth());

let months = [
    "Sausis",
    "Vasaris",
    "Kovas",
    "Balandis",
    "Gegužė",
    "Birželis",
    "Liepa",
    "Rugpjūtis",
    "Rugsėjis",
    "Spalis",
    "Lapkritis",
    "Gruodis"
];

let month = months[d.getMonth()];

console.log(month);

let d1 = new Date("2000-01-01");
console.log(d1.getFullYear());
console.log(d1.getDay()); // savaites diena

// moments.js - darbui su datomis ir laiku skirta biblioteka

