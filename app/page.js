"use client";

import React, { useState, useEffect } from "react";
import CityInputModal from "../components/CityInputModal";
import getWeather from "@/helper/weather";
import WeatherDisplay from "@/components/WeatherDisplay";

export default function Home() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleCitySubmit = (enteredCity) => {
    setCity(enteredCity);
  };

  useEffect(() => {
    const fetchWeather = async () => {
      if (city) {
        try {
          const response = await getWeather(city);
          console.log(response);
          setWeatherData(response);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchWeather();
  }, [city]); // Re-run useEffect on city change

  return (
    <div>
      <h1 className="text-center text-xl font-semibold mt-2">Weather App</h1>
      <div className="flex justify-center">
        <button
          onClick={openModal}
          className="bg-blue-500 rounded-md p-1 text-white"
        >
          Enter City
        </button>
      </div>
      <CityInputModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        onSubmit={handleCitySubmit}
      />
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
    </div>
  );
}
