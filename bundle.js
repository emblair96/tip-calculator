(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./util":2}],2:[function(require,module,exports){
const calculateTip = (meal, tip) => {
  return Number((meal * (tip/100)).toFixed(2));
}

module.exports = { calculateTip }
 
},{}]},{},[1]);
