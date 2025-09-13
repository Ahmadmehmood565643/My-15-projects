const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];
const weekdays = [
  "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",
];

const giveaway  = document.querySelector(".giveaway");
const deadline  = document.querySelector(".deadline");
const items     = document.querySelectorAll(".deadline-format h4"); // <-- fixed

// Year, monthIndex (0-based), day, hours(24h), minutes, seconds
let futureDate  = new Date(2026, 11, 24, 11, 30, 0);

const year     = futureDate.getFullYear();
const hours24  = futureDate.getHours();
const minutes  = futureDate.getMinutes();
const month    = months[futureDate.getMonth()];
const date     = futureDate.getDate();
const weekday  = weekdays[futureDate.getDay()];

// Optional: make AM/PM nice
const ampm   = hours24 >= 12 ? "pm" : "am";
const hours12 = ((hours24 + 11) % 12) + 1;
const minPad  = minutes.toString().padStart(2, "0");

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year}, ${hours12}:${minPad}${ampm}`;

const futureTime = futureDate.getTime();

function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime - today;

  const oneDay    = 24 * 60 * 60 * 1000;
  const oneHour   = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calculate all values
  let days    = Math.floor(t / oneDay);
  let hours   = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  const format = (num) => (num < 10 ? `0${num}` : `${num}`);

  // update DOM
  items.forEach((item, index) => {
    item.innerHTML = format(values[index]); // <-- use format
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
  }
}

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
