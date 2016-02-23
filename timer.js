function init() {
  console.log("website loaded");
  var reset = document.getElementById("reset");
  var start = document.getElementById("start");
  var pause = document.getElementById("pause");
  var timer=document.getElementById("timer")


  reset.addEventListener("click", resetTimer, false);
  start.addEventListener("click", startTimer, false);
  pause.addEventListener("click", pauseTimer, false);

    var gSeconds = 0;
    var gIntervalID = null;
    var gIntervalID2;
    var oneClick = true;

  // Start Timer
  function startTimer() {
     console.log("startTimer running");
     if (gIntervalID === null) {
       gIntervalID = window.setInterval(updateTime, 1000);
     // by removing var intervalID -> You change intervalID into a global variable
      }
  }
  function updateTime() {
      console.log("updateTime running");
      gSeconds += 1;
      if (gSeconds === 1) {
        timer.innerHTML ="Time elapsed: " + gSeconds + " second";
        // use innerText
      } else {
        timer.innerHTML ="Time elapsed: " + gSeconds + " seconds";
      }
  };
  // Pause Timer
  function pauseTimer() {
      console.log("pauseTimer running");
      window.clearInterval(gIntervalID);
      gIntervalID = null;
  };

  // Reset Timer
  function resetTimer() {
    console.log("resetTimer running")
    window.clearInterval(gIntervalID);
    // var lSeconds = 0;
    gSeconds = 0;
    timer.innerHTML = "Time elapsed:" + gSeconds + " second";

    //(function() {
    gIntervalID2 = window.setInterval(function(){
    timer.innerHTML = "Stop Watch";
    }, 2000);
  //}());

  }
};

init();
