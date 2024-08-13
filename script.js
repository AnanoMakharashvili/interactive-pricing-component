const getToggleCircle = document.getElementById("toggle-circle");
const getButton = document.getElementById("toggle-button");
const getInputRange = document.getElementById("range");
const pageviewCost = document.getElementById("pageview");
const getPrice = document.getElementById("price");
const getPriceOne = document.getElementById("price-one");
const getMonth = document.getElementById("month");

let toggleButtonOn = false;

function calculateCost(value) {
  let cost = 8;

  if ((value >= 0) & (value <= 20)) {
    pageviewCost.textContent = "10K Pageviews";
    cost = "$8";
  } else if (value > 20 && value <= 40) {
    pageviewCost.textContent = "50K Pageviews";
    cost = "$12";
  } else if (value > 40 && value <= 60) {
    pageviewCost.textContent = "100K Pageviews";
    cost = "$16";
  } else if (value > 60 && value <= 80) {
    pageviewCost.textContent = "500K Pageviews";
    cost = "$24";
  } else if (value > 80 && value <= 100) {
    pageviewCost.textContent = "1M Pageviews";
    cost = "$36";
  }

  getPrice.textContent = cost;
  getPriceOne.textContent = cost;

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

getToggleCircle.addEventListener("click", (event) => {
  if (toggleButtonOn) {
    getToggleCircle.style.marginLeft = "4px";
    toggleButtonOn = false;
    getButton.style.backgroundColor = " #CFD8EF";
  } else {
    getToggleCircle.style.marginLeft = "18px";
    toggleButtonOn = true;
    getButton.style.backgroundColor = "#7AEADF";
    getButton.style.cursor = "pointer";
  }
});
