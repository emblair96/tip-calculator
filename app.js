document.addEventListener("DOMContentLoaded", function() {
  // code...


let mealAmt = document.querySelector("#mealAmt");
let tipPercentage = document.querySelector("#tipPercentage");
let calculateBtn = document.querySelector("#calculateBtn");
var { calculateTip } = require('./util');

console.log(calculateBtn)

function calculateNewTotal() {
  console.log('hello')
}

calculateBtn.addEventListener("click", () => calculateTip(mealAmt, tipPercentage));
calculateBtn.addEventListener("click", calculateNewTotal());

// calculateNewTotal()

// module.exports = {
//   calculateTip: (meal,tip) => {
//     return meal * (tip/100);
//   }
// };
})