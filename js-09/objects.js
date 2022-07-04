let student1 = {
    name: "Jonas",
    surname: "Jonaitis",
    age: 30
};

console.log(student1.name);
console.log(student1.surname);
console.log(student1.age);

// Jonas Jonaitis mokosi Vilniaus universitete, matematiką. Jam yra 25 metai.
console.log(`${student1.name} ${student1.surname} mokosi Vilniaus universitete, matematiką. Jam yra ${student1.age} metai.`);

let student2 = {
    name: "Onutė",
    surname: "Pakalnutė",
    age: 25
}

let student3 = {
    name: "Petras",
    surname: "Petraitis",
    age: 26
}

let students = [student1, student2, student3];
console.log(students[1].name);

// pirmas variantas pats prasciausias
console.log(`${students[0].name} ${students[0].surname} mokosi Vilniaus universitete, matematiką. Jam yra ${students[0].age} metai.`);

console.log(`${students[1].name} ${students[1].surname} mokosi Vilniaus universitete, matematiką. Jam yra ${students[1].age} metai.`);

console.log(`${students[2].name} ${students[2].surname} mokosi Vilniaus universitete, matematiką. Jam yra ${students[2].age} metai.`);

// geras variantas
for (let index = 0; index < students.length; index++) {
    const student = students[index];

    console.log(`${student.name} ${student.surname} mokosi Vilniaus universitete, matematiką. Jam yra ${student.age} metai.`);
}

// dar trumpesnis variantas
for (const student of students) {
    console.log(getStudentInfo(student.name, student.surname, student.age));
}

function getStudentInfo(name, surname, age){
    return `${name} ${surname} mokosi Vilniaus universitete, matematiką. Jam yra ${age} metai.`;
}

// pats trumpiausias
students.forEach(student => {
    console.log(getStudentInfo(student.name, student.surname, student.age));
})


// studentu duomenis isspausdinkime i lentele
for (const student of students) {
    let template = `<tr><td>${student.name}</td><td>${student.surname}</td><td>${student.age}</td></tr>`;
    document.querySelector("table").innerHTML += template;
}