const cityInput = document.querySelector("#cityInput");
const searchButton = document.querySelector("#searchBtn");
const cityName = document.querySelector("#city");
const temperature = document.querySelector("#temperature");
const condition = document.querySelector("#condition");
const humidity = document.querySelector("#humidity");

const weatherData = {
    multan: { name: "Multan", temperature: 91, condition: "Sunny", humidity: 44 },
    lahore: { name: "Lahore", temperature: 90, condition: "Sunny", humidity: 51 },
    karachi: { name: "Karachi", temperature: 89, condition: "Mostly sunny", humidity: 69 }
};

searchButton.addEventListener("click", () => {
    const searchedCity = cityInput.value.trim().toLowerCase();
    
    if (searchedCity === "") {
        alert("Please enter a city");
        return;
    }
    
    if (weatherData[searchedCity]) {
        const cityData = weatherData[searchedCity];
        cityName.textContent = cityData.name;
        temperature.textContent = `${cityData.temperature}°F`;
        condition.textContent = cityData.condition;
        humidity.textContent = `Humidity: ${cityData.humidity}%`; 
    } else {
        alert("City not found! Please try Multan, Lahore, or Karachi");
    }
});
