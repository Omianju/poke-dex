import React, { createContext, useState, useContext, useEffect } from 'react';
import { Pokemon } from '../types/pokemon';

interface PokemonContextType {
  allPokemons: Pokemon[];
  filteredPokemons: Pokemon[];
  isLoading: boolean;
  error: string | null;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedType: string;
  setSelectedType: (type: string) => void;
}

const PokemonContext = createContext<PokemonContextType>({
  allPokemons: [],
  filteredPokemons: [],
  isLoading: true,
  error: null,
  searchTerm: '',
  setSearchTerm: () => {},
  selectedType: '',
  setSelectedType: () => {},
});

export const usePokemons = () => useContext(PokemonContext);

export const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');

  // Fetch Pokemon data
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
        if (!response.ok) {
          throw new Error('Failed to fetch Pokemon data');
        }

        const data = await response.json();
        const results = data.results;

        // Fetch detailed data for each Pokemon
        const pokemonDetails = await Promise.all(
          results.map(async (pokemon: { url: string }) => {
            const detailResponse = await fetch(pokemon.url);
            if (!detailResponse.ok) {
              throw new Error(`Failed to fetch details for ${pokemon.url}`);
            }
            return detailResponse.json();
          })
        );

        // Transform data to our Pokemon interface
        const formattedPokemons: Pokemon[] = pokemonDetails.map((details: any) => ({
          id: details.id,
          name: details.name,
          types: details.types.map((type: { type: { name: string } }) => type.type.name),
          sprites: {
            front_default: details.sprites.front_default,
            other: {
              'official-artwork': {
                front_default: details.sprites.other?.['official-artwork']?.front_default || details.sprites.front_default
              }
            }
          }
        }));

        setAllPokemons(formattedPokemons);
        setFilteredPokemons(formattedPokemons);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  // Filter Pokemon based on search term and selected type
  useEffect(() => {
    let filtered = allPokemons;

    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase();
      filtered = filtered.filter(pokemon => 
        pokemon.name.toLowerCase().includes(searchTermLower)
      );
    }

    if (selectedType) {
      filtered = filtered.filter(pokemon => 
        pokemon.types.includes(selectedType)
      );
    }

    setFilteredPokemons(filtered);
  }, [searchTerm, selectedType, allPokemons]);

  return (
    <PokemonContext.Provider
      value={{
        allPokemons,
        filteredPokemons,
        isLoading,
        error,
        searchTerm,
        setSearchTerm,
        selectedType,
        setSelectedType,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};