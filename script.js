function convertTemperature() {
    const unitSelect = document.getElementById('unit');
    const valueInput = document.getElementById('valueInput');
    
    const unit = unitSelect.value;
    const value = parseFloat(valueInput.value);

    if (isNaN(value) || value === '') {
        alert("Please enter a valid number.");
        return;
    }

    let celsius, fahrenheit, kelvin;

    if (unit === 'celsius') {
        celsius = value;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 273.15;
    } else if (unit === 'fahrenheit') {
        fahrenheit = value;
        celsius = (fahrenheit - 32) * 5/9;
        kelvin = (fahrenheit - 32) * 5/9 + 273.15;
    } else if (unit === 'kelvin') {
        kelvin = value;
        celsius = kelvin - 273.15;
        fahrenheit = (kelvin - 273.15) * 9/5 + 32;
    }

    document.getElementById('celsiusResult').textContent = `Celsius: ${celsius.toFixed(2)}`;
    document.getElementById('fahrenheitResult').textContent = `Fahrenheit: ${fahrenheit.toFixed(2)}`;
    document.getElementById('kelvinResult').textContent = `Kelvin: ${kelvin.toFixed(2)}`;
}
