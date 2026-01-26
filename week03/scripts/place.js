// Display current year
document.getElementById("year").textContent = new Date().getFullYear();

// Display last modified date
document.getElementById("lastModified").textContent = document.lastModified;

// Static weather values (metric)
const temperature = 10; // °C
const windSpeed = 5;    // km/h

// Wind chill calculation function (ONE return line as required)
function calculateWindChill(temp, speed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}

// Display wind chill only if conditions are met
const windChillElement = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
  windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
  windChillElement.textContent = "N/A";
}
