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

