//query selectors
var currentDayEl = document.querySelector("#currentDay");

//global variables

//variables to store the date
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();
//check to see if variables are storing correctly
console.log(year);
console.log(month);
console.log(day);
//thumbs up we need to add 1 to month
month = month + 1;
//display the date in currentDayEl
currentDayEl.textContent = month + "/" + day + "/" + year;


