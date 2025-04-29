import React from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { usePokemons } from '../context/PokemonContext';

export const Search: React.FC = () => {
  const { searchTerm, setSearchTerm } = usePokemons();
  
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <SearchIcon className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="block bg-gray-100 w-full pl-10 pr-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm"
        placeholder="Search Pokémon..."
        aria-label="Search for a Pokémon"
      />
    </div>
  );
};