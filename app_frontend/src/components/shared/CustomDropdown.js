// CustomDropdown.js
import React, { useState } from 'react';
import {Icon} from "@iconify/react";

const CustomDropdown = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    onSelect(language);
  };

  return (
    <div className="relative">
      <div
        className="flex"
        onClick={toggleDropdown}
      >
        <Icon icon="vaadin:globe-wire" fontSize={20} />
        <div className="ml-2 text-sm font-semibold">
          {selectedLanguage}
        </div>
      </div>
      {isOpen && (
        <div className="absolute mt-2 bg-white border border-gray-200 rounded shadow-lg w-full">
          <div
            className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-gray-600"
            onClick={() => handleSelect('English')}
          >
            English
          </div>
          <div
            className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-gray-600"
            onClick={() => handleSelect('Hindi')}
          >
            Hindi
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;

