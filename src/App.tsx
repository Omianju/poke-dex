import React from 'react';
import Header from './components/Header';
import PokemonList from './components/PokemonList';
import { PokemonProvider } from './context/PokemonContext';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PokemonProvider>
        <Header />
        <main className="container mx-auto px-4 py-8">
          <PokemonList />
        </main>
      </PokemonProvider>
    </div>
  );
}

export default App;