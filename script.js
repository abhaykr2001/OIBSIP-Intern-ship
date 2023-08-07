const convertBtn = document.getElementById("convertBtn");
const temperatureInput = document.getElementById("temperatureInput");
const resultArea = document.getElementById("resultArea");

convertBtn.addEventListener("click", convertTemperature);

function convertTemperature() {
    const temperature = parseFloat(temperatureInput.value);
    if (isNaN(temperature)) {
        resultArea.textContent = "Please enter a valid temperature.";
        return;
    }

    const selectedUnit = document.querySelector('input[name="unit"]:checked').value;
    let convertedTemperature, convertedUnit;

    if (selectedUnit === "celsius") {
        convertedTemperature = temperature;
        convertedUnit = "Celsius";
    } else if (selectedUnit === "fahrenheit") {
        convertedTemperature = (temperature * 9/5) + 32;
        convertedUnit = "Fahrenheit";
    } else if (selectedUnit === "kelvin") {
        convertedTemperature = temperature + 273.15;
        convertedUnit = "Kelvin";
    }

    resultArea.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
}
