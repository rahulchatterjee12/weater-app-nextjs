"use client";
import React, { useState } from "react";
import ReactModal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const CityInputModal = ({ isOpen, onClose, onSubmit }) => {
  const [city, setCity] = useState("");

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(city);
    onClose();
  };

  return (
    <div>
      <ReactModal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
        <h2 className="text-center text-xl font-serif">Enter City</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className="border border-gray-300 rounded-md p-1 my-2"
              type="text"
              placeholder="City Name"
              value={city}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="p-1 bg-blue-400 rounded-md text-center text-white"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </ReactModal>
    </div>
  );
};

export default CityInputModal;
