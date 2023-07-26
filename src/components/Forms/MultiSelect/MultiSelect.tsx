import React from 'react';
import './MultiSelect.css';
import MultiSelectProps from './MultiSelect.interface';

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  className,
  selectedOptions,
  setSelectedOptions,
}) => {
  const toggleOption = (option: string) => {
    if (option === 'all') {
      setSelectedOptions(
        selectedOptions?.length === options.length ? [] : options,
      );
    } else {
      setSelectedOptions((prevSelectedOptions) =>
        prevSelectedOptions?.includes(option)
          ? prevSelectedOptions.filter((item) => item !== option)
          : prevSelectedOptions && [...prevSelectedOptions, option],
      );
    }
  };

  const isOptionSelected = (option: string) => {
    return (
      selectedOptions?.includes(option) ||
      (option === 'all' && selectedOptions?.length === options.length)
    );
  };

  return (
    <div className={`multiselect flex flex-wrap ${className}`}>
      {options.map((option) => (
        <div
          key={option}
          className={`option ${isOptionSelected(option) ? 'selected' : ''}`}
          onClick={() => toggleOption(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default MultiSelect;
