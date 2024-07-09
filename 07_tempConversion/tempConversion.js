const convertToCelsius = function(tempInFahrenheit) {
  const tempCelsius = (tempInFahrenheit-32)*(5/9);
  return Math.round(tempCelsius*10)/10;
};

const convertToFahrenheit = function(tempInCelsius) {
  const tempFahrenheit = (tempInCelsius*(9/5))+32;
  return Math.round(tempFahrenheit*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
