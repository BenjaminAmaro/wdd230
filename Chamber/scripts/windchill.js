// Function to calculate the wind chill factor
function calculateWindChill(temperature, windspeed) {
    // Check if temperature and windspeed meet the specification limits
    if (temperature <= 50 && windspeed > 3.0) {
      // Calculate the wind chill factor
      const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temperature * Math.pow(windspeed, 0.16);

    return Math.round(windChill) + " °F";
    } else {
      // Wind chill is not applicable
    return "N/A";
    }
}

  // Get temperature and wind speed values from the HTML
const temperatureElement = document.getElementById("temperature");
const windspeedElement = document.getElementById("windspeed");
const windchillElement = document.getElementById("windchill");

const temperature = parseFloat(temperatureElement.textContent);
const windspeed = parseFloat(windspeedElement.textContent);

// Calculate and update the wind chill value
const windChillValue = calculateWindChill(temperature, windspeed);
windchillElement.textContent = windChillValue;