const getToggleCircle = document.getElementById("toggle-circle");
const getButton = document.getElementById("toggle-button");
const getInputRange = document.getElementById("range");
const pageviewCost = document.getElementById("pageview");
const getPrice = document.getElementById("price");
const getPriceOne = document.getElementById("price-one");
const getMonth = document.getElementById("month");

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
}

getInputRange.addEventListener("input", (event) => {
  event.target.value;
  const value = range.value;
  calculateCost(value);
});

getToggleCircle.addEventListener("click", (event) => {
  event.target.value;
  const value = range.value;
  getToggleCircle.style.marginLeft = "18";
  getButton.style.backgroundColor = "#7AEADF";
  calculateCost(value);
});
