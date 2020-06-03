// Sets date on page
var fullDate = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").append(fullDate);
//readies document with color coding function
$(document).ready(function () {
  colorCode();
});
//function to update the color of textboxes by assigning them to classes
function colorCode() {
  var currentHour = moment().hour();
//cycles through each timeblock to add class for background color
  $(".block").each(function () {
    var blockHour = $(this).attr("id").split("block")[1];
    if (currentHour > blockHour) {
      $(this).addClass("past");
    } else if (currentHour === blockHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}
// Clears localstorage
$(".clearEvents").click(function () {
  localStorage.clear();
});
// Saves textbox to local storage
$(".save").on("click", function () {
  var timeBlock = $(this).parent().attr("id");
  var addEvent = $(this).siblings(".event").val();
  localStorage.setItem(timeBlock, addEvent);
  console.log(timeBlock, addEvent);
});
//Retrieves information from localstorage so text remains on page when refreshed or reopened
$("#block8").children(".event").val(localStorage.getItem("block8"));
$("#block9").children(".event").val(localStorage.getItem("block9"));
$("#block10").children(".event").val(localStorage.getItem("block10"));
$("#block11").children(".event").val(localStorage.getItem("block11"));
$("#block12").children(".event").val(localStorage.getItem("block12"));
$("#block13").children(".event").val(localStorage.getItem("block13"));
$("#block14").children(".event").val(localStorage.getItem("block14"));
$("#block15").children(".event").val(localStorage.getItem("block15"));
$("#block16").children(".event").val(localStorage.getItem("block16"));
$("#block17").children(".event").val(localStorage.getItem("block17"));