import React, { useState } from 'react';

interface DropDownProps {
  options: string[];
  id: string;
}

const DropDown: React.FC<DropDownProps> = ({ options, id }) => {
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
    <div
      className={`dropdown relative inline-block w-full ${
        isOpen ? 'open' : ''
      }`}
    >
      <input
        id={id}
        onClick={toggleDropdown}
        type="text"
        name="selected_option"
        value={selectedOption || ''}
        placeholder="Select an option"
        onChange={() => console.log('onChange')}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      {isOpen && (
        <ul className="absolute z-10 top-full left-0 w-full mt-1 p-0 list-none bg-white border-[1px] border-gray-200 rounded shadow">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionSelect(option)}
              className="p-4 cursor-pointer hover:bg-slate-200"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
