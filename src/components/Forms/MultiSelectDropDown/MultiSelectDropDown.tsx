import React, { useState } from 'react';
import './MultiSelectDropDown.css';
import { FaXmark } from 'react-icons/fa6';

interface MultiSelectDropDownProps {
  options: string[];
}

const MultiSelectDropDown: React.FC<MultiSelectDropDownProps> = ({
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleOptionSelect = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions((prevOptions) =>
        prevOptions.filter((item) => item !== option),
      );
    } else {
      setSelectedOptions((prevOptions) => [...prevOptions, option]);
    }
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleOutsideClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    const modalContent = document.querySelector('.modal-content');
    if (modalContent && !modalContent.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  return (
    <div className="multi-select-dropdown">
      <div className="selected-option" onClick={toggleDropdown}>
        {selectedOptions.length === 0
          ? 'Select an option'
          : selectedOptions.join(', ')}
      </div>
      {isOpen && (
        <div className="modal" onClick={handleOutsideClick}>
          <div className="modal-content flex flex-col items-end rounded-md min-w-[50%] p-5 pt-2.5">
            <button className="close-button m-4" onClick={handleModalClose}>
              <FaXmark className="icon !text-slate-900" />
            </button>
            <ul className="options">
              {options.map((option) => (
                <li
                  key={option}
                  onClick={() => handleOptionSelect(option)}
                  className={selectedOptions.includes(option) ? 'selected' : ''}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropDown;
