document.addEventListener("DOMContentLoaded", function () {
  let mealAmt = document.querySelector("#mealAmt");
  let tipPercentage = document.querySelector("#tipPercentage");
  let calculateBtn = document.querySelector("#calculateBtn");
  var { calculateTip } = require("./util");

  calculateBtn.addEventListener("click", () => {
    calculateTipTest(mealAmt.value, tipPercentage.value);
  });

  calculateBtn.addEventListener("click", () => {
    let tip = calculateTip(mealAmt.value, tipPercentage.value);
    let total = Number(mealAmt.value) + tip;
    let tipP = document.createElement("p");
    tipP.textContent = tip;
    let totalP = document.createElement("p");
    totalP.textContent = total;
    document.querySelector(".output-fields").append(tipP, totalP);
  });
});
