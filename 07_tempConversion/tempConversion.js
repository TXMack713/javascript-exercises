const ftoc = function(tempF) {
  let conversion = ((tempF - 32) * 5) / 9;
  let rounded = Math.round(conversion * 10) / 10;
  return (rounded);
};

const ctof = function(tempC) {
  let conversion = (tempC * 1.8) + 32;
  let rounded = Math.round(conversion * 10) / 10;
  return (rounded);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
