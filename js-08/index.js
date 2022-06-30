// apsirašome tuščią masyvą
let students = [];

document.getElementById("submit").onclick = function(){
    // veiksmai vykdomi tik tada kai paspaudžiamas mygtukas
    pushStudentToArray();
}

document.getElementById("student").onkeyup = function(event){
    if(event.key == "Enter"){
        pushStudentToArray();
    }
}

document.getElementById("show").onclick = function(){
    for (const student of students) {
        //sconsole.log(student);
        // let li = document.createElement("li");
        // li.innerHTML = student;
        // document.querySelector("ul").appendChild(li);
        document.querySelector("ul").innerHTML += `<li>${student}</li>`;
    }
}

function pushStudentToArray(){
    students.push(document.getElementById("student").value);
    document.getElementById("student").value = ""; // išvalau teksto lauką
    console.log(students); // pasižiūriu
}

// paveiksliuku masyvas
let images = ["1.webp", "2.webp", "3.jpeg", "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1200", "https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg?auto=compress&cs=tinysrgb&w=1200"];

document.getElementById("show-images").onclick = function(){
    for (const image of images) {
        document.getElementById("images-container").innerHTML += `<img src="${image}" style="width:300px">`;
    }
}
