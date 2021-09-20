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