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
    let selects: string[] | null = [];
    if (selectedOptions?.includes(option)) {
      selects = selectedOptions.filter((item) => item !== option);
    } else {
      selects = selectedOptions && [...selectedOptions, option];
    }
    setSelectedOptions(selects);
  };

  const isOptionSelected = (option: string) =>
    selectedOptions?.includes(option);

  return (
    <div className={`multiselect ${className}`}>
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
