var clicks = 0;
var timeSeconds = 0;
const cpsDisplay = document.querySelector(".cpsdisplay");
const timeElapsed = document.querySelector(".timeremaining");
const totalClicks = document.querySelector(".totalclicks");

const button = document.querySelector(".button");
const textInButton = document.querySelector("#textInButton");

button.addEventListener("click", click);

function click() {

     if (clicks == 0) {
          textInButton.style.opacity = "0";
          console.log("e")
          updateTime()
     }

     clicks++;
     totalClicks.innerHTML = clicks;
}

function updateTime() {
     timeSeconds += 0.1;
     timeSeconds = Math.round(timeSeconds * 10) / 10
     timeElapsed.innerHTML = timeSeconds;
     setTimeout(updateTime, 100);
}
