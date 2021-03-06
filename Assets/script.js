// // update the current day at the top
// var todayDate = moment().format("dddd, MMMM Do YYYY");
// $("#currentDay").text(todayDate);
// //get the current hour
// var currentHour = moment().format("HH");
// console.log(currentHour);

var timeDisplayEl = $('#time-display');

// handle displaying the time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }
  setInterval(displayTime, 1000)