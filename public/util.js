const calculateTip = (meal, tip) => {
  return Number((meal * (tip/100)).toFixed(2));
}

module.exports = { calculateTip }
 