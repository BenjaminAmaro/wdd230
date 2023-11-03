const tempElement = document.getElementById("temperature");
const wsElement = document.getElementById("windspeed");
const wdcElement = document.getElementById("windchill");
const temperature = parseFloat(tempElement.textContent);
const windspeed = parseFloat(wsElement.textContent);
const wcValue = calculateWindChill(temperature, windspeed);
wdcElement.textContent = wcValue;

function calculateWindChill(temperature, windspeed) {
    if (temperature <= 50 && windspeed > 3.0) {
      const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temperature * Math.pow(windspeed, 0.16);
    return Math.round(windChill) + " °F";
    } else {
    return "N/A";
    }
}