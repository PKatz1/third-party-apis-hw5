//Declaring jQuery variables

var timeDisplayEl = $('#time-display');
// var clearEventsButtonEl = $(".clear-events").on("click", clearAllEvents);

// handle displaying the time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
    
    
    // console.log(moment("MMM DD, YYY [at] hh:mm:ss a").isSame ("2021-03-06 15:35:42", "hour"));
    // console.log(moment("MMM DD, YYY [at] hh:mm:ss a").isBefore(""));
    // console.log(moment("2021-03-06").isBefore("2021-03.07"));
    // console.log(moment("2021-03-06").isAfter("2021-03.05"));

    
    

  }

  setInterval(displayTime, 1000)

  for(var i=0;i<=9;i++){
    //if (rightNow === i){
      console.log (document.querySelectorAll(".time-block")[i].attributes[1]);
            
    //} 
  }

// displayTime();