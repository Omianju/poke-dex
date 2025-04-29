import React from 'react';
import { PokemonCard } from './PokemonCard';
import { LoadingSpinner } from './LoadingSpinner';
import { usePokemons } from '../context/PokemonContext';
import { EmptyState } from './EmptyState';

const PokemonList: React.FC = () => {
  const { filteredPokemons, isLoading, error } = usePokemons();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-red-500 text-lg font-medium mb-2">Failed to fetch Pokémon data</p>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  if (filteredPokemons.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {filteredPokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;