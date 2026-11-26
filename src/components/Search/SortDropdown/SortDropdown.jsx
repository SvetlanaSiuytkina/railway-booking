import { useState, useRef, useEffect } from 'react';
import './SortDropdown.css';

function SortDropdown({ sortBy, setSortBy }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = [
    { value: 'time', label: 'времени' },
    { value: 'price', label: 'стоимости' },
    { value: 'duration', label: 'длительности' },
  ];

  const selectedOption = options.find(opt => opt.value === sortBy);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value) => {
    setSortBy(value);
    setIsOpen(false);
  };

  return (
    <div className="sort-dropdown" ref={dropdownRef}>
      <div className="sort-dropdown__header" onClick={() => setIsOpen(!isOpen)}>
        <span className="sort-dropdown__label">сортировать по: </span>
        <span className="sort-dropdown__selected">{selectedOption?.label}</span>
      </div>

      {isOpen && (
        <div className="sort-dropdown__menu">
          {options.map(option => (
            <div
              key={option.value}
              className={`sort-dropdown__item ${option.value === sortBy ? 'active' : ''}`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SortDropdown;