import React from 'react';
import { Pokemon } from '../types/pokemon';
import { getTypeColor } from '../utils/typeColors';

interface PokemonCardProps {
  pokemon: Pokemon;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const mainType = pokemon.types[0];
  const typeColor = getTypeColor(mainType);
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
      <div 
        className={`h-32 flex justify-center items-center p-4`}
        style={{ background: `linear-gradient(to bottom, ${typeColor}40, ${typeColor}20)` }}
      >
        {pokemon.sprites && (
          <img 
            src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default} 
            alt={pokemon.name} 
            className="h-full object-contain drop-shadow-md"
          />
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold capitalize">{pokemon.name}</h2>
          <span className="text-gray-500 font-medium">#{pokemon.id.toString().padStart(3, '0')}</span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {pokemon.types.map((type) => (
            <span 
              key={type}
              className="px-2 py-1 text-xs font-medium rounded-full text-white capitalize"
              style={{ backgroundColor: getTypeColor(type) }}
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};