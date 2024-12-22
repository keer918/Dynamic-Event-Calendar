import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons
import "./Header.css";

const Header = ({ currentDate, onMonthChange }) => (
  <header className="header bg-gray-100 p-4 rounded-md shadow-md">
    <div className="header-navigation flex justify-between items-center">
      <button
        className="text-gray-700 hover:text-blue-500 p-2 rounded-md focus:outline-none"
        onClick={() => onMonthChange(-1)}
      >
        <FaChevronLeft size={20} />
      </button>
      <h2 className="header-title text-lg font-semibold text-gray-800">
        {currentDate.format("MMMM YYYY")}
      </h2>
      <button
        className="text-gray-700 hover:text-blue-500 p-2 rounded-md focus:outline-none"
        onClick={() => onMonthChange(1)}
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  </header>
);

export default Header;
