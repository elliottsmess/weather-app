
function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;

    if (cityName.trim() === '') {
        alert('Please enter a city name.');
        return;
    }

    const apiKey = 'c86601d62cf28bcfb9288424664cdb74';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');

    // Extract relevant weather data from the API response
    const cityName = data.name;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;

    // Display the weather information
    weatherInfo.innerHTML = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature} &deg;C</p>
        <p>Humidity: ${humidity}%</p>
    `;
}
