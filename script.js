const getToggleCircle = document.getElementById("toggle-circle");
const getButton = document.getElementById("toggle-button");
const getInputRange = document.getElementById("range");
const pageviewCost = document.getElementById("pageview");
const getPrice = document.getElementById("price");
const getPriceOne = document.getElementById("price-one");
const getMonth = document.getElementById("month");
const getMonthOne = document.getElementById("month-one");

let isToggleButtonOn = false;
let period = "/month";

function calculateCost(value) {
  let cost = 8;
  if (value >= 0 && value <= 20) {
    pageviewCost.textContent = "10K Pageviews";
    cost = isToggleButtonOn ? "$90" : "$8";
  } else if (value > 20 && value <= 40) {
    pageviewCost.textContent = "50K Pageviews";
    cost = isToggleButtonOn ? "$108" : "$12";
  } else if (value > 40 && value <= 60) {
    pageviewCost.textContent = "100K Pageviews";
    cost = isToggleButtonOn ? "$144" : "$16";
  } else if (value > 60 && value <= 80) {
    pageviewCost.textContent = "500K Pageviews";
    cost = isToggleButtonOn ? "$180" : "$24";
  } else if (value > 80 && value <= 100) {
    pageviewCost.textContent = "1M Pageviews";
    cost = isToggleButtonOn ? "$225" : "$36";
  }
  period = isToggleButtonOn ? "/year" : "/month";
  getPrice.textContent = cost;
  getPriceOne.textContent = cost;
  getMonth.textContent = period;
  getMonthOne.textContent = period;

  range.style.background = `linear-gradient(
  to right,
  hsl(174, 77%, 80%) 0%,
  hsl(174, 77%, 80%) ${value}%,
   hsl(224, 65%, 95%) 50%,
   hsl(224, 65%, 95%) 100%
)`;
}

getInputRange.addEventListener("input", (event) => {
  event.target.value;
  const value = range.value;
  calculateCost(value);
});

getButton.addEventListener("click", (event) => {
  if (isToggleButtonOn) {
    getToggleCircle.style.marginLeft = "4px";
    getButton.style.backgroundColor = " #CFD8EF";
    isToggleButtonOn = false;
  } else {
    getToggleCircle.style.marginLeft = "18px";
    getButton.style.backgroundColor = "#7AEADF";
    getButton.style.cursor = "pointer";
    isToggleButtonOn = true;
  }
  const value = getInputRange.value;
  calculateCost(value);
});
