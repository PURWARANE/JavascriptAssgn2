//seconds and tens appending,button to start,stop,reset,interval variable
window.onload = function () {
  var seconds = 00; 
  var tens = 00; 
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval ;
//start button interval
  buttonStart.onclick = function() {
    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }
  //stop button
    buttonStop.onclick = function() {
       clearInterval(Interval);
  }
  
//reset button to clear all and start from new
  buttonReset.onclick = function() {
     clearInterval(Interval);
    
    tens = "00";
  	seconds = "00";
    minute ="00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
    appendmin.innerHTML = minute;
  }
  
  function startTimer () {
    //tens added and seconds andded according to start and stop button timing
    tens++; 
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9){
      appendTens.innerHTML = tens;
    } 
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  }
}