import React, { useState } from 'react';
import './MultiSelectDropDown.css';
import { FaXmark } from 'react-icons/fa6';

interface MultiSelectDropDownProps {
  options: string[];
  id: string;
}

const MultiSelectDropDown: React.FC<MultiSelectDropDownProps> = ({
  options,
  id,
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
    <div className="relative inline-block w-full">
      {/* <div className="selected-option" onClick={toggleDropdown}>
        {selectedOptions.length === 0
          ? 'Select an option'
          : selectedOptions.join(', ')}
      </div> */}
      <input
        id={id}
        onClick={toggleDropdown}
        type="text"
        name="selected_options"
        value={selectedOptions.join(', ') || ''}
        placeholder="Select an option"
        onChange={() => console.log('onChange')}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      {isOpen && (
        <div
          className="fixed z-10 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
          onClick={handleOutsideClick}
        >
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
