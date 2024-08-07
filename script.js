const getToggleCircle = document.getElementById("toggle-circle");
const getButton = document.getElementById("toggle-button");
console.log(getButton);

getToggleCircle.addEventListener("click", () => {
  getToggleCircle.style.marginLeft = "18";
  getButton.style.backgroundColor = "#7AEADF";
});
