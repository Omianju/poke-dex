import React from 'react';
import { SearchX } from 'lucide-react';
import { usePokemons } from '../context/PokemonContext';

export const EmptyState: React.FC = () => {
  const { searchTerm, selectedType, setSearchTerm, setSelectedType } = usePokemons();
  
  const handleReset = () => {
    setSearchTerm('');
    setSelectedType('');
  };
  
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <SearchX className="w-16 h-16 text-gray-400 mb-4" />
      <h3 className="text-xl font-semibold text-gray-700 mb-2">No Pokémon Found</h3>
      <p className="text-gray-600 mb-6 max-w-md">
        {searchTerm && selectedType 
          ? `We couldn't find any Pokémon matching "${searchTerm}" with type "${selectedType}".`
          : searchTerm 
            ? `We couldn't find any Pokémon matching "${searchTerm}".`
            : `We couldn't find any Pokémon with type "${selectedType}".`
        }
      </p>
      <button
        onClick={handleReset}
        className="px-4 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition-colors"
      >
        Reset Filters
      </button>
    </div>
  );
};