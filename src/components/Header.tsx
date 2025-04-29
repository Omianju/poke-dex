import React from 'react';
import { Search } from './Search';
import { TypeFilter } from './TypeFilter';
import { usePokemons } from '../context/PokemonContext';
import { Pokeball } from '../icons/Pokeball';

const Header = () => {
  const { isLoading } = usePokemons();

  return (
    <header className="bg-gradient-to-r from-red-500 to-red-600 shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center">
            <Pokeball className="w-8 h-8 mr-3 text-white" />
            <h1 className="text-2xl font-bold text-white">Pokémon Explorer</h1>
          </div>
          
          {!isLoading && (
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Search />
              <TypeFilter />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;