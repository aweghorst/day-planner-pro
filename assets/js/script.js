//Display Current Date
var dateDisplay = moment().format("dddd, MMMM, Do");
$("#currentDay").text(dateDisplay);


//STYLEROW FUNCTION
function styleRow(currentHour, hour, id) {
  var hour = i;
  //Used to create a variable to dynamically fill in the correct element id in the for loop.
  var id = "#time" + i;
  //current hour in 24hr format
  var currentHour = moment().format('H');

  //Conditionals to add classes
  if (currentHour > hour) {
    $(id).addClass('past');
  } else if (currentHour < hour) {
    $(id).addClass('future');
  } else {
    $(id).addClass('present');
  }
}

//Loop starting with 9am and ending after 9 hours
for (var i = 9; i < 18; i++) {
  styleRow();
}

//Save Button Clicked

//Save to Local Storage

//Load from Local Storage