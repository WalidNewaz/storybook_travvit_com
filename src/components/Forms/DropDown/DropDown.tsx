import React, { useState } from 'react';
import './DropDown.css';

interface DropDownProps {
  options: string[];
}

const DropDown: React.FC<DropDownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <div className="selected-option" onClick={toggleDropdown}>
        {selectedOption || 'Select an option'}
      </div>
      {isOpen && (
        <ul className="options">
          {options.map((option) => (
            <li key={option} onClick={() => handleOptionSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
