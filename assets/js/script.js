$(document).ready(function () {

  //Variables
  var text9AM = $("#time9");
  var text10AM = $("#time10");
  var text11AM = $("#time11");
  var text12PM = $("#time12");
  var text1PM = $("#time13");
  var text2PM = $("#time14");
  var text3PM = $("#time15");
  var text4PM = $("#time16");
  var text5PM = $("#time17");

  //Display Current Date
  var dateDisplay = moment().format("dddd, MMMM, Do");
  $("#currentDay").text(dateDisplay);


  //Function to style the rows based on relation to current time
  function styleRow(currentHour, hour, id) {
    //sets the value of hour to the position in the loop
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
      $(id).attr("placeholder", "It's " + moment().format('h:mma') + "!");
    }
  }

  //Loop starting with 9am and ending after 9 hours
  for (var i = 9; i < 18; i++) {
    styleRow();
  }


  //Styling for Task Edit
  //textarea click btn highlight
  $("textarea").on("click", function () {
    var activeEl = $(this).parent();
    var inactiveEl = activeEl.siblings();
    inactiveEl.addClass('dim');
  });

  //Save Button Hovered
  $(".saveBTN").hover(function () {
    $(".saveBTN").addClass('.saveBtn i:hover');
  });

  //Save Button Clicked
  $("i").on("click", function () {

    //removes fade
    var fadeBack = $(this).parent().parent().siblings();
    fadeBack.removeClass('dim');

    //save items in the local storage
    localStorage.setItem("9AM", (text9AM.val()));
    localStorage.setItem("10AM", (text10AM.val()));
    localStorage.setItem("11AM", (text11AM.val()));
    localStorage.setItem("12PM", (text12PM.val()));
    localStorage.setItem("1PM", (text1PM.val()));
    localStorage.setItem("2PM", (text2PM.val()));
    localStorage.setItem("3PM", (text3PM.val()));
    localStorage.setItem("4PM", (text4PM.val()));
    localStorage.setItem("5PM", (text5PM.val()));
  });


  //Load from Local Storage
  $("#time9").append(localStorage.getItem("9AM"));
  $("#time10").append(localStorage.getItem("10AM"));
  $("#time11").append(localStorage.getItem("11AM"));
  $("#time12").append(localStorage.getItem("12PM"));
  $("#time13").append(localStorage.getItem("1PM"));
  $("#time14").append(localStorage.getItem("2PM"));
  $("#time15").append(localStorage.getItem("3PM"));
  $("#time16").append(localStorage.getItem("4PM"));
  $("#time17").append(localStorage.getItem("5PM"));

});