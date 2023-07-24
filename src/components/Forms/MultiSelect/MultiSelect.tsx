import React, { useState } from 'react';
import './MultiSelect.css';

interface MultiSelectProps {
  options: string[];
  onSelectAll?: () => void;
  className?: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  onSelectAll,
  className,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleOption = (option: string) => {
    if (option === 'all') {
      setSelectedOptions(
        selectedOptions.length === options.length ? [] : options,
      );
    } else {
      setSelectedOptions((prevSelectedOptions) =>
        prevSelectedOptions.includes(option)
          ? prevSelectedOptions.filter((item) => item !== option)
          : [...prevSelectedOptions, option],
      );
    }
  };

  const isOptionSelected = (option: string) => {
    return (
      selectedOptions.includes(option) ||
      (option === 'all' && selectedOptions.length === options.length)
    );
  };

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
      {/* <div className="option select-all" onClick={onSelectAll}>
        Select All
      </div> */}
    </div>
  );
};

export default MultiSelect;
