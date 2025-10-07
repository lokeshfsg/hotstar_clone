import React, { useState } from "react";
import axios from "axios";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = "1d410cadb5baef8a1493d0667596c6c8";

  const getWeather = () => {
    if (!city) {
      alert("Please enter a city name");
      return;
    }

    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then((res) => setWeather(res.data))
      .catch(() => alert("City not found or API error"));
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }} className="wind">
      <h1>🌤 Weather App</h1>
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className="hot"
      />
      <button onClick={getWeather}>Search</button>

      {weather && (
        <div className="rain">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p>🌡 Temperature: {weather.main.temp}°C</p>
          <p>🤔 Feels Like: {weather.main.feels_like}°C</p>
          <p>📉 Min Temp: {weather.main.temp_min}°C</p>
          <p>📈 Max Temp: {weather.main.temp_max}°C</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>🌬 Wind Speed: {weather.wind.speed} m/s</p>
          <p>🌫 Visibility: {weather.visibility / 1000} km</p>
          <p>☀ Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
          <p>🌙 Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>
          <p>🌥 Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
