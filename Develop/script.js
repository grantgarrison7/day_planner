//query selectors
var currentDayEl = document.querySelector("#currentDay");
var block8aEl = document.querySelector("#block8a");
var block9aEl = document.querySelector("#block9a");
var block10aEl = document.querySelector("#block10a");
var block11aEl = document.querySelector("#block11a");
var block12pEl = document.querySelector("#block12p");
var block1pEl = document.querySelector("#block1p");
var block2pEl = document.querySelector("#block2p");
var block3pEl = document.querySelector("#block3p");
var block4pEl = document.querySelector("#block4p");
var block5pEl = document.querySelector("#block5p");

//global variables
var addEvent8 = "";
var addEvent9 = "";
var addEvent10 = "";
var addEvent11 = "";
var addEvent12 = "";
var addEvent1 = "";
var addEvent2 = "";
var addEvent3 = "";
var addEvent4 = "";
var addEvent5 = "";

//variables to store the date
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();
var hour = date.getHours();
//check to see if variables are storing correctly
console.log(year);
console.log(month);
console.log(day);
console.log(hour);
//thumbs up we need to add 1 to month
month = month + 1;
//display the date in currentDayEl
currentDayEl.textContent = month + "/" + day + "/" + year;

//color code for past, present, and future

switch(true){
    case hour < 8:
        block8aEl.setAttribute("style", "background-color: lawngreen;");
        block9aEl.setAttribute("style", "background-color: lawngreen;");
        block10aEl.setAttribute("style", "background-color: lawngreen;");
        block11aEl.setAttribute("style", "background-color: lawngreen;");
        block12pEl.setAttribute("style", "background-color: lawngreen;");
        block1pEl.setAttribute("style", "background-color: lawngreen;");
        block2pEl.setAttribute("style", "background-color: lawngreen;");
        block3pEl.setAttribute("style", "background-color: lawngreen;");
        block4pEl.setAttribute("style", "background-color: lawngreen;");
        block5pEl.setAttribute("style", "background-color: lawngreen;");
        break;
    case hour === 8:
        block8aEl.setAttribute("style", "background-color: yellow;");
        block9aEl.setAttribute("style", "background-color: lawngreen;");
        block10aEl.setAttribute("style", "background-color: lawngreen;");
        block11aEl.setAttribute("style", "background-color: lawngreen;");
        block12pEl.setAttribute("style", "background-color: lawngreen;");
        block1pEl.setAttribute("style", "background-color: lawngreen;");
        block2pEl.setAttribute("style", "background-color: lawngreen;");
        block3pEl.setAttribute("style", "background-color: lawngreen;");
        block4pEl.setAttribute("style", "background-color: lawngreen;");
        block5pEl.setAttribute("style", "background-color: lawngreen;");
        break;
    case hour === 9:
        block8aEl.setAttribute("style", "background-color: coral;");
        block9aEl.setAttribute("style", "background-color: yellow;");
        block10aEl.setAttribute("style", "background-color: lawngreen;");
        block11aEl.setAttribute("style", "background-color: lawngreen;");
        block12pEl.setAttribute("style", "background-color: lawngreen;");
        block1pEl.setAttribute("style", "background-color: lawngreen;");
        block2pEl.setAttribute("style", "background-color: lawngreen;");
        block3pEl.setAttribute("style", "background-color: lawngreen;");
        block4pEl.setAttribute("style", "background-color: lawngreen;");
        block5pEl.setAttribute("style", "background-color: lawngreen;");
        break;
    case hour === 10:
        block8aEl.setAttribute("style", "background-color: coral;");
        block9aEl.setAttribute("style", "background-color: coral;");
        block10aEl.setAttribute("style", "background-color: yellow;");
        block11aEl.setAttribute("style", "background-color: lawngreen;");
        block12pEl.setAttribute("style", "background-color: lawngreen;");
        block1pEl.setAttribute("style", "background-color: lawngreen;");
        block2pEl.setAttribute("style", "background-color: lawngreen;");
        block3pEl.setAttribute("style", "background-color: lawngreen;");
        block4pEl.setAttribute("style", "background-color: lawngreen;");
        block5pEl.setAttribute("style", "background-color: lawngreen;");
        break;
    case hour === 11:
        block8aEl.setAttribute("style", "background-color: coral;");
        block9aEl.setAttribute("style", "background-color: coral;");
        block10aEl.setAttribute("style", "background-color: coral;");
        block11aEl.setAttribute("style", "background-color: yellow;");
        block12pEl.setAttribute("style", "background-color: lawngreen;");
        block1pEl.setAttribute("style", "background-color: lawngreen;");
        block2pEl.setAttribute("style", "background-color: lawngreen;");
        block3pEl.setAttribute("style", "background-color: lawngreen;");
        block4pEl.setAttribute("style", "background-color: lawngreen;");
        block5pEl.setAttribute("style", "background-color: lawngreen;");
        break;
    case hour === 12:
        block8aEl.setAttribute("style", "background-color: coral;");
        block9aEl.setAttribute("style", "background-color: coral;");
        block10aEl.setAttribute("style", "background-color: coral;");
        block11aEl.setAttribute("style", "background-color: coral;");
        block12pEl.setAttribute("style", "background-color: yellow;");
        block1pEl.setAttribute("style", "background-color: lawngreen;");
        block2pEl.setAttribute("style", "background-color: lawngreen;");
        block3pEl.setAttribute("style", "background-color: lawngreen;");
        block4pEl.setAttribute("style", "background-color: lawngreen;");
        block5pEl.setAttribute("style", "background-color: lawngreen;");
        break;
    case hour === 13:
        block8aEl.setAttribute("style", "background-color: coral;");
        block9aEl.setAttribute("style", "background-color: coral;");
        block10aEl.setAttribute("style", "background-color: coral;");
        block11aEl.setAttribute("style", "background-color: coral;");
        block12pEl.setAttribute("style", "background-color: coral;");
        block1pEl.setAttribute("style", "background-color: yellow;");
        block2pEl.setAttribute("style", "background-color: lawngreen;");
        block3pEl.setAttribute("style", "background-color: lawngreen;");
        block4pEl.setAttribute("style", "background-color: lawngreen;");
        block5pEl.setAttribute("style", "background-color: lawngreen;");
        break;
    case hour === 14:
        block8aEl.setAttribute("style", "background-color: coral;");
        block9aEl.setAttribute("style", "background-color: coral;");
        block10aEl.setAttribute("style", "background-color: coral;");
        block11aEl.setAttribute("style", "background-color: coral;");
        block12pEl.setAttribute("style", "background-color: coral;");
        block1pEl.setAttribute("style", "background-color: coral;");
        block2pEl.setAttribute("style", "background-color: yellow;");
        block3pEl.setAttribute("style", "background-color: lawngreen;");
        block4pEl.setAttribute("style", "background-color: lawngreen;");
        block5pEl.setAttribute("style", "background-color: lawngreen;");
        break;
    case hour === 15:
        block8aEl.setAttribute("style", "background-color: coral;");
        block9aEl.setAttribute("style", "background-color: coral;");
        block10aEl.setAttribute("style", "background-color: coral;");
        block11aEl.setAttribute("style", "background-color: coral;");
        block12pEl.setAttribute("style", "background-color: coral;");
        block1pEl.setAttribute("style", "background-color: coral;");
        block2pEl.setAttribute("style", "background-color: coral;");
        block3pEl.setAttribute("style", "background-color: yellow;");
        block4pEl.setAttribute("style", "background-color: lawngreen;");
        block5pEl.setAttribute("style", "background-color: lawngreen;");
        break;
    case hour === 16:
        block8aEl.setAttribute("style", "background-color: coral;");
        block9aEl.setAttribute("style", "background-color: coral;");
        block10aEl.setAttribute("style", "background-color: coral;");
        block11aEl.setAttribute("style", "background-color: coral;");
        block12pEl.setAttribute("style", "background-color: coral;");
        block1pEl.setAttribute("style", "background-color: coral;");
        block2pEl.setAttribute("style", "background-color: coral;");
        block3pEl.setAttribute("style", "background-color: coral;");
        block4pEl.setAttribute("style", "background-color: yellow;");
        block5pEl.setAttribute("style", "background-color: lawngreen;");
        break;
    case hour === 17:
        block8aEl.setAttribute("style", "background-color: coral;");
        block9aEl.setAttribute("style", "background-color: coral;");
        block10aEl.setAttribute("style", "background-color: coral;");
        block11aEl.setAttribute("style", "background-color: coral;");
        block12pEl.setAttribute("style", "background-color: coral;");
        block1pEl.setAttribute("style", "background-color: coral;");
        block2pEl.setAttribute("style", "background-color: coral;");
        block3pEl.setAttribute("style", "background-color: coral;");
        block4pEl.setAttribute("style", "background-color: coral;");
        block5pEl.setAttribute("style", "background-color: yellow;");
        break;
    case hour > 17:
        block8aEl.setAttribute("style", "background-color: coral;");
        block9aEl.setAttribute("style", "background-color: coral;");
        block10aEl.setAttribute("style", "background-color: coral;");
        block11aEl.setAttribute("style", "background-color: coral;");
        block12pEl.setAttribute("style", "background-color: coral;");
        block1pEl.setAttribute("style", "background-color: coral;");
        block2pEl.setAttribute("style", "background-color: coral;");
        block3pEl.setAttribute("style", "background-color: coral;");
        block4pEl.setAttribute("style", "background-color: coral;");
        block5pEl.setAttribute("style", "background-color: coral;");
        break;
}

block8aEl.addEventListener("click", function(event) {
    if (addEvent8 === ""){
    addEvent8 = document.createElement("INPUT");
    addEvent8.setAttribute("type", "text");
    addEvent8.setAttribute("value", "Enter event here.");
    block8aEl.appendChild(addEvent8);
    }
});

var button8aEl = document.querySelector("#button8a");

button8aEl.addEventListener("click", function(event){

    var event8 = block8aEl.value;
    console.log(event8);
    localStorage.setItem('addEvent8', JSON.stringify(addEvent8));

});

block9aEl.addEventListener("click", function(event) {
    if (addEvent9 === ""){
    addEvent9 = document.createElement("INPUT");
    addEvent9.setAttribute("type", "text");
    addEvent9.setAttribute("value", "Enter event here.");
    block9aEl.appendChild(addEvent9);
    }
});

block10aEl.addEventListener("click", function(event) {
    if (addEvent10 === ""){
    addEvent10 = document.createElement("INPUT");
    addEvent10.setAttribute("type", "text");
    addEvent10.setAttribute("value", "Enter event here.");
    block10aEl.appendChild(addEvent10);
    }
});

block11aEl.addEventListener("click", function(event) {
    if (addEvent11 === ""){
    addEvent11 = document.createElement("INPUT");
    addEvent11.setAttribute("type", "text");
    addEvent11.setAttribute("value", "Enter event here.");
    block11aEl.appendChild(addEvent11);
    }
});

block12pEl.addEventListener("click", function(event) {
    if (addEvent12 === ""){
    addEvent12 = document.createElement("INPUT");
    addEvent12.setAttribute("type", "text");
    addEvent12.setAttribute("value", "Enter event here.");
    block12pEl.appendChild(addEvent12);
    }
});

block1pEl.addEventListener("click", function(event) {
    if (addEvent1 === ""){
    addEvent1 = document.createElement("INPUT");
    addEvent1.setAttribute("type", "text");
    addEvent1.setAttribute("value", "Enter event here.");
    block1pEl.appendChild(addEvent1);
    }
});

block2pEl.addEventListener("click", function(event) {
    if (addEvent2 === ""){
    addEvent2 = document.createElement("INPUT");
    addEvent2.setAttribute("type", "text");
    addEvent2.setAttribute("value", "Enter event here.");
    block2pEl.appendChild(addEvent2);
    }
});

block3pEl.addEventListener("click", function(event) {
    if (addEvent3 === ""){
    addEvent3 = document.createElement("INPUT");
    addEvent3.setAttribute("type", "text");
    addEvent3.setAttribute("value", "Enter event here.");
    block3pEl.appendChild(addEvent3);
    }
});

block4pEl.addEventListener("click", function(event) {
    if (addEvent4 === ""){
    addEvent4 = document.createElement("INPUT");
    addEvent4.setAttribute("type", "text");
    addEvent4.setAttribute("value", "Enter event here.");
    block4pEl.appendChild(addEvent4);
    }
});

block5pEl.addEventListener("click", function(event) {
    if (addEvent5 === ""){
    addEvent5 = document.createElement("INPUT");
    addEvent5.setAttribute("type", "text");
    addEvent5.setAttribute("value", "Enter event here.");
    block5pEl.appendChild(addEvent5);
    }
});
