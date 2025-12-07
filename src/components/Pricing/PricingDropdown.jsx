// components/Pricing/PricingDropdown.jsx
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/outline';

const PricingDropdown = ({ options, selectedValue, onSelect, uniqueId, period = 'month' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedOption = options.find(opt => opt.value === selectedValue);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      {/* Old Price Display */}
      {selectedOption?.oldValue && (
        <div className="mb-2">
          <span className="text-sm text-gray-500 line-through">
            ${selectedOption.oldValue.toLocaleString()}
          </span>
        </div>
      )}

      {/* Dropdown Button */}
      <button
        type="button"
        className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-lg hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
          {/* Database Icon */}
          <div className="flex items-center justify-center w-5 h-5">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-700">
              <path d="M10 17.5C7.90278 17.5 6.12847 17.1771 4.67708 16.5312C3.22569 15.8854 2.5 15.0972 2.5 14.1667V5.83333C2.5 4.91667 3.23264 4.13194 4.69792 3.47917C6.16319 2.82639 7.93056 2.5 10 2.5C12.0694 2.5 13.8368 2.82639 15.3021 3.47917C16.7674 4.13194 17.5 4.91667 17.5 5.83333V14.1667C17.5 15.0972 16.7743 15.8854 15.3229 16.5312C13.8715 17.1771 12.0972 17.5 10 17.5Z" />
            </svg>
          </div>
          
          {/* Selected Option Display */}
          <div className="text-left">
            <div className="flex items-baseline">
              <span className="font-semibold text-gray-900">
                {(selectedOption.credits / 1000).toLocaleString()}k
              </span>
              <span className="text-sm text-gray-600 ml-1">credits</span>
            </div>
            <div className="text-xs text-gray-500">
              / {period}
            </div>
          </div>
        </div>
        
        <ChevronDownIcon 
          className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <div
              key={option.value}
              className={`px-4 py-3 cursor-pointer transition-colors hover:bg-gray-50 ${
                selectedValue === option.value ? 'bg-blue-50' : ''
              }`}
              onClick={() => {
                onSelect(option.value);
                setIsOpen(false);
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {/* Option Icon */}
                  <div className="flex items-center justify-center w-5 h-5">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-700">
                      <path d="M10 17.5C7.90278 17.5 6.12847 17.1771 4.67708 16.5312C3.22569 15.8854 2.5 15.0972 2.5 14.1667V5.83333C2.5 4.91667 3.23264 4.13194 4.69792 3.47917C6.16319 2.82639 7.93056 2.5 10 2.5C12.0694 2.5 13.8368 2.82639 15.3021 3.47917C16.7674 4.13194 17.5 4.91667 17.5 5.83333V14.1667C17.5 15.0972 16.7743 15.8854 15.3229 16.5312C13.8715 17.1771 12.0972 17.5 10 17.5Z" />
                    </svg>
                  </div>
                  
                  {/* Option Details */}
                  <div>
                    <div className="font-medium text-gray-900">
                      {(option.credits / 1000).toLocaleString()}k credits
                    </div>
                    {option.oldValue && (
                      <div className="text-xs text-gray-500 line-through">
                        ${option.oldValue.toLocaleString()}
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Price and Checkmark */}
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <div className="font-bold text-gray-900">
                      ${option.value.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500">
                      / {option.period || period}
                    </div>
                  </div>
                  {selectedValue === option.value && (
                    <CheckIcon className="w-5 h-5 text-blue-600" />
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {/* Footer Note */}
          <div className="px-4 py-3 border-t border-gray-200 bg-gray-50">
            <div className="text-xs text-gray-600">
              For overages, charge $0.01 per credit.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingDropdown;