(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let mealAmt = document.querySelector("#mealAmt");
let tipPercentage = document.querySelector("#tipPercentage");
let calculateBtn = document.querySelector("#calculateBtn");
var { calculateTip } = require('./util');


calculateBtn.addEventListener("click", () => {
  let tip = calculateTip(mealAmt.value, tipPercentage.value);
  let total = Number(mealAmt.value) + tip;
  let tipP = document.createElement("p")
  tipP.textContent = tip;
  let totalP = document.createElement("p");
  totalP.textContent = total;
  document.querySelector(".output-fields").append(tipP, totalP);
});

},{"./util":2}],2:[function(require,module,exports){
// module.exports = {
//  calculateTip: ((meal,tip) => {
//   console.log('ehllo?')
//   console.log(meal * (tip/100))
//   return meal * (tip/100);
//   }),
//   calculateNewTotal: ((subtotal) => {
//     let tipAmt = calculateTip();
//     console.log(tipAmt, subtotal)
//     return tipAmt + subtotal;
//   })
// }

const calculateTip = (meal, tip) => {
  return Number((meal * (tip/100)).toFixed(2));
}

// function calculateNewTotal(subtotal) {
//   let tipAmt = calculateTip();
//     console.log(tipAmt, subtotal)
//     return tipAmt + subtotal;
// }

module.exports = {calculateTip }
 
  
// https://stackoverflow.com/questions/950087/how-do-i-include-a-javascript-file-in-another-javascript-file
//https://sebhastian.com/javascript-require-is-not-defined/
},{}]},{},[1]);
