var clicks = 0;
var timeSeconds = 0;
var cps = 0;
var time = new Date();
var howLong = 5;
const cpsDisplay = document.querySelector(".cpsdisplay");
const timeElapsed = document.querySelector(".timeremaining");
const totalClicks = document.querySelector(".totalclicks");
var startingTime = 0;
var done = false;

const button = document.querySelector(".button");
const resetButton = document.querySelector(".resetButton");
const textInButton = document.querySelector("#textInButton");

// Time selector buttons
const oneSec = document.querySelector("#oneSecond");
const fiveSec = document.querySelector("#fiveSeconds");
const tenSec = document.querySelector("#tenSeconds");
const fifteenSec = document.querySelector("#fifteenSeconds");
const twentySec = document.querySelector("#twentySeconds");
const thirtySec = document.querySelector("#thirtySeconds");
const sixtySec = document.querySelector("#sixtySeconds");

var selectedTime = fiveSec;


// Event listeners
button.addEventListener("click", click);

resetButton.addEventListener("click", resetTime);

oneSec.addEventListener("click", function(){return timeChange(1)});
fiveSec.addEventListener("click", function(){return timeChange(5)});
tenSec.addEventListener("click", function(){return timeChange(10)});
fifteenSec.addEventListener("click", function(){return timeChange(15)});
twentySec.addEventListener("click", function(){return timeChange(20)});
thirtySec.addEventListener("click", function(){return timeChange(30)});
sixtySec.addEventListener("click", function(){return timeChange(60)});

function click() {

     if (done === false)  {
          if (clicks === 0) {
               textInButton.style.opacity = "0";
               var thingTime = Date.now();
               startingTime = thingTime;
               updateTime()
          }

          clicks++;
          totalClicks.innerHTML = clicks;
     }
}

function updateTime() {
     var now = Date.now();
     timeSeconds = (now - startingTime) / 1000;
     timeSeconds = Math.round(timeSeconds * 100) / 100;
     timeElapsed.innerHTML = timeSeconds.toFixed(2);
     cps = Math.round((clicks / timeSeconds) * 100) / 100;
     cpsDisplay.innerHTML = cps.toFixed(1);
     if (timeSeconds > howLong) {
          timeElapsed.innerHTML = howLong;
          done = true;
     }
     else {
          setTimeout(updateTime, 10);
     }
}

function timeChange(num) {
     if (clicks === 0) {
          howLong = num;
          selectedTime.style.backgroundColor = "rgb(69, 117, 138)";
          switch (num) {
               case 1:
                    selectedTime = oneSec;
                    break;
               case 5:
                    selectedTime = fiveSec;
                    break;
               case 10:
                    selectedTime = tenSec;
                    break;
               case 15:
                    selectedTime = fifteenSec;
                    break;
               case 20:
                    selectedTime = twentySec;
                    break;
               case 30:
                    selectedTime = thirtySec;
                    break;
               case 60:
                    selectedTime = sixtySec;
                    break;
          }

          selectedTime.style.backgroundColor = "rgb(139, 67, 67)";
     }
}

function resetTime() {
     if (done === true) {
          clicks = 0;
          timeSeconds = 0;
          cps = 0;
          startingTime = 0;
          done = false;

          timeElapsed.innerHTML = 0.00;
          cpsDisplay.innerHTML = 0.0;
          totalClicks.innerHTML = 0;
          textInButton.style.opacity = "1";
     }
}
