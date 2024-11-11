const convertToCelsius = function(fahrTemp) {
  const celsiusTemp = (fahrTemp - 32) * 5 / 9;
  return Math.round(celsiusTemp * 10) / 10;
};

const convertToFahrenheit = function(celsiusTemp) {
  const fahrTemp = celsiusTemp * 9 / 5 + 32;
  return Math.round(fahrTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
