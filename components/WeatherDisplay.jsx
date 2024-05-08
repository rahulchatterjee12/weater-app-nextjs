import React from "react";

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) {
    return <p>Loading weather data...</p>;
  }

  const { name, main, weather, wind } = weatherData; // Destructure relevant data
  const { temp } = main; // Temperature
  const { description, icon } = weather[0]; // Weather description and icon code

  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`; // Weather icon URL

  return (
    <div className="mt-5 flex justify-center text-center flex-col">
      <h2>{name}</h2>
      <img
        className="w-[35px] h-[35px] mx-auto"
        src={iconUrl}
        alt={description}
      />
      <p>Temperature: {temp} &deg;C</p>
      <p>Description: {description}</p>
      <p>Wind: {wind.speed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
