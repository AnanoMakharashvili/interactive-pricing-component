const getTogglerCircle = document.getElementById("toggler-circle");
const getButton = document.getElementById("toggler-button");
console.log(getButton);

getTogglerCircle.addEventListener("click", () => {
  getTogglerCircle.style.marginLeft = "18";
  getButton.style.backgroundColor = "#7AEADF";
});
