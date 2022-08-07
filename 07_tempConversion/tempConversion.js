const ftoc = function(tempF) {
  let tempC = parseFloat(((tempF - 32) * 5 / 9).toFixed(1));
  return tempC;
};

const ctof = function(celsTemp) {
  let farTemp = parseFloat(((celsTemp * 9 / 5) + 32).toFixed(1));
  return farTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
