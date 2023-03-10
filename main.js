const timerElement = document.querySelector(".widget__text-timer");

if (timerElement) {
  let hoursSet = 1;

  // time remaining in seconds
  // let t = hoursSet * 3600;
  let t = 5;

  // timer to tick every second
  let timer = setInterval(tick, 1000);

  function tick() {
    if (t > 0) {
      let hours = Math.floor(t / 3600);
      if (hours < 10) {
        hours = "0" + hours;
      }

      let minutes = Math.floor(t / 60) - hours * 60;
      if (minutes < 10) {
        minutes = "0" + minutes;
      }

      let seconds = t - minutes * 60 - hours * 3600;
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      let display = `${hours} : ${minutes} : ${seconds}`;
      timerElement.innerText = display;

      t = t - 1;
    } else {
      clearInterval(timer);
      timerElement.innerText = "00 : 00 : 00";
      timerElement.classList.add("widget__text-timer--end");
    }
  }
}
