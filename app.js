var clicks = 0;
var timeSeconds = 0;
var cps = 0;
var time = new Date();
var currentTime = time.getTime()
var howLong = 5;    // Change when buttons for setting time work
const cpsDisplay = document.querySelector(".cpsdisplay");
const timeElapsed = document.querySelector(".timeremaining");
const totalClicks = document.querySelector(".totalclicks");
var startingTime = 0;
var done = false;

const button = document.querySelector(".button");
const textInButton = document.querySelector("#textInButton");

button.addEventListener("click", click);

function click() {

     if (done === false)  {
          if (clicks == 0) {
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
