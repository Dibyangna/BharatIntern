document.getElementById("convertBtn").addEventListener("click", convertTemperature);

function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;
    let convertedTemperature = 0;
    let convertedUnit = "";

    if (unit === "celsius") {
        convertedTemperature = (temperatureInput - 32) * 5/9;
        convertedUnit = "Celsius";
    } else if (unit === "fahrenheit") {
        convertedTemperature = (temperatureInput * 9/5) + 32;
        convertedUnit = "Fahrenheit";
    } else if (unit === "kelvin") {
        convertedTemperature = temperatureInput + 273.15;
        convertedUnit = "Kelvin";
    }

    document.getElementById("result").innerHTML = `Converted temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
}
