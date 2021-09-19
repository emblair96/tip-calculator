(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"./util":2}],2:[function(require,module,exports){
module.exports = {
 calculateTip: ((meal,tip) => {
  return meal * (tip/100);
  })
}
 
  
// https://stackoverflow.com/questions/950087/how-do-i-include-a-javascript-file-in-another-javascript-file
//https://sebhastian.com/javascript-require-is-not-defined/
},{}]},{},[1]);
