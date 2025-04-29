import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { usePokemons } from '../context/PokemonContext';
import { getTypeColor } from '../utils/typeColors';
import { pokemonTypes } from '../utils/pokemonTypes';

export const TypeFilter: React.FC = () => {
  const { selectedType, setSelectedType } = usePokemons();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleTypeSelect = (type: string) => {
    setSelectedType(type === 'all' ? '' : type);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center justify-between w-full sm:w-40 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="flex items-center">
          {selectedType ? (
            <>
              <span 
                className="w-3 h-3 rounded-full mr-2" 
                style={{ backgroundColor: getTypeColor(selectedType) }}
              />
              <span className="capitalize">{selectedType}</span>
            </>
          ) : (
            "All Types"
          )}
        </span>
        <ChevronDown className="w-4 h-4 ml-2" />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-1 w-56 bg-white rounded-md shadow-lg max-h-60 overflow-auto">
          <ul className="py-1" role="listbox">
            <li 
              className="px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 flex items-center"
              onClick={() => handleTypeSelect('all')}
            >
              All Types
            </li>
            {pokemonTypes.map((type) => (
              <li 
                key={type}
                className="px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 flex items-center"
                onClick={() => handleTypeSelect(type)}
              >
                <span 
                  className="w-3 h-3 rounded-full mr-2" 
                  style={{ backgroundColor: getTypeColor(type) }}
                />
                <span className="capitalize">{type}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};