//interaction for side navbar
let btn = document.querySelector(".fa-bars");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".fa-magnifying-glass");

btn.onclick = function () {
    sidebar.classList.toggle("active");
}

searchBtn.onclick = function () {
    sidebar.classList.toggle("active");
}

//API INTEGRATION
// Replace with your actual API key
const apiKey = "a876763bb0104cf2ad575748243110";
const searchBox = document.querySelector(".search input");

// Function to fetch weather data
async function getWeatherData(location) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");

        // Weather icon
        document.getElementById("weather-icon").src = `https:${data.current.condition.icon}`;
        
        // Update elements with fetched data
        document.querySelector(".temperature span").innerText = data.current.temp_c;
        document.querySelector(".description h2").innerText = data.current.condition.text;
        document.querySelector(".humidity .info span:last-child").innerText = `${data.current.humidity}%`;
        document.querySelector(".wind-speed .info span:last-child").innerText = `${data.current.wind_kph} kph`;
        document.querySelector(".country").innerText = `${data.location.name}, ${data.location.country}`;
        document.querySelector(".coordination span:first-child").innerText = data.location.lat;
        document.querySelector(".coordination span:last-child").innerText = data.location.lon;
        document.querySelector(".text-info span:last-child").innerText = data.current.last_updated;
        
        // Temperature feels details
        document.querySelector(".feels span:last-child").innerText = `${data.current.feelslike_c}°C`;
        document.querySelector(".wind span:last-child").innerText = `${data.current.windchill_c}°C`;
        document.querySelector(".heat span:last-child").innerText = `${data.current.heatindex_c}°C`;
        
        // Wind conditions
        document.querySelector(".degree p").innerText = data.current.wind_degree;
        document.querySelector(".direction p").innerText = data.current.wind_dir;
        document.querySelector(".pressure-mb p").innerText = `${data.current.pressure_mb} mb`;
        document.querySelector(".pressure-in p").innerText = `${data.current.precip_in} in`;

    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

searchBtn.addEventListener("click", () => {
    const location = searchBox.value;
    getWeatherData(location);
})
// Call the function when the page loads
document.addEventListener("DOMContentLoaded", () => getWeatherData("London"));
